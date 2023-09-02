import { NextResponse, NextRequest } from 'next/server';
import connect from "../../../database";
import EmailVerification from '@/app/api/database/models/EmailVerification';
import User from '@/app/api/database/models/User';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
});

const sendEmail = async (to: string, subject: string, text: string): Promise<void> => {
    const link = text;
    const html = `
    <div style="background-color: #08090B; color: white; font-family: Arial, sans-serif; text-align: center; padding: 50px;">
        <img src="https://i.ibb.co/xmpbmF2/logo.png" alt="Logo" width="200" height="30">
        <h1>Confirm Your Registration</h1>
        <a href="${link}" style="display: inline-block; padding: 10px 20px; background: radial-gradient(100.04% 100% at 50% 0%, #66CBF9 0%, #0FB5FF 100%); color: white; text-decoration: none; border-radius: 5px;">Confirm</a>
        <p style="opacity: 0.7; margin-top: 20px;">If you did not initiate this registration, please ignore this email.</p>
    </div>
    `;

    const mailOptions = {
      from: 'notification@bitlist.com', 
      to: to,
      subject: subject,
      html: html
    };
  
    await transport.sendMail(mailOptions);
};

function generateToken(length: number = 50): string {
    const safeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let token = '';
    const bytes = crypto.randomBytes(length);
    for (let i = 0; i < length; i++) {
        token += safeChars[bytes[i] % safeChars.length];
    }
    return token;
}

export async function POST(request: NextRequest) {
    const res = await request.json();
    const { email } = res;

    if (!email) {
      return NextResponse.json({ message: "Email is required.", status: 400 });
    }
    const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json({ message: "Email already in use.", status: 400 });
      }
    try {
      await connect(); 
  
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + 15);
  
      const newVerificationEntry = new EmailVerification({
          email,
          token: generateToken(50),
          expiresAt  
      });
  
      await newVerificationEntry.save();
      await sendEmail(email, 'Registration confirmation', `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register?email=${email}&token=${newVerificationEntry.token}`);
      return NextResponse.json({  message: "Registration successful. Please check your email to confirm.", status: 200 });
  
    } catch (error) {
      console.error("Error in processing: ", error);
      return new NextResponse("Error in processing. Please try again.", { status: 500 });
    }
}
