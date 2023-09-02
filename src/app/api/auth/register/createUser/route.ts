import { NextResponse, NextRequest } from 'next/server';
import connect from "../../../database";
import User from '@/app/api/database/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';  

export async function POST(request: NextRequest) {
    const { email, password, name } = await request.json();
    const jwtSecret = process.env.JWT_SECRET
    if (!email || !password || !name) {
      return NextResponse.json({ message: "All fields are required.", status: 400 });
    }

    try {
      await connect();
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
          email,
          password: hashedPassword,
          name,
          role: 'user'
      });

      await newUser.save();

        if (!jwtSecret) {
            throw new Error('JWT_SECRET is not defined in environment variables.');
        }
      const token = jwt.sign(
        { userEmail: email },   
        jwtSecret,  
        { expiresIn: '7d' }   // выпуск токена неделя
      );

      // ответ
      return NextResponse.json({
        token,
        user: {
          email: newUser.email,
          name: newUser.name,
          balance: newUser.balance,
          role: newUser.role
        },
        status: 200
      });

    } catch (error) {
      console.error("Error in processing: ", error);
      return NextResponse.json({ message: "Error in processing. Please try again.", status: 500 });
    }
}
