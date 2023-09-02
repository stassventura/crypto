import { NextResponse, NextRequest } from 'next/server';
import connect from "../../../database";
import EmailVerification from '@/app/api/database/models/EmailVerification';

export async function POST(request: NextRequest) {
    const { token, email } = await request.json();

    if (!token || !email) {
      return NextResponse.json({ message: "Token and email are required.", status: 400 });
    }

    try {
      await connect(); 

      const verificationEntry = await EmailVerification.findOne({ token: token });

      if (!verificationEntry) {
        return NextResponse.json({ message: "Invalid or expired token.", status: 400 });
      }

      if (verificationEntry.email !== email) {
        return NextResponse.json({ message: "Email mismatch.", status: 400 });
      }

      if (new Date() > verificationEntry.expiresAt) {
        await EmailVerification.deleteOne({ _id: verificationEntry._id });
        return NextResponse.json({ message: "Token has expired.", status: 400 });
      }

      await EmailVerification.deleteOne({ _id: verificationEntry._id });
      return NextResponse.json({ message: "Email verification successful.", status: 200 });

    } catch (error) {
      console.error("Error in processing: ", error);
      return new NextResponse("Error in processing. Please try again.", { status: 500 });
    }
}
