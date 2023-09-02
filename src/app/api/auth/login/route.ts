import { NextResponse, NextRequest } from 'next/server';
import connect from "../../database";
import User from '@/app/api/database/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    const jwtSecret = process.env.JWT_SECRET;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required.", status: 400 });
    }

    try {
      await connect();
      
      const user = await User.findOne({ email: email });
      if (!user) {
        return NextResponse.json({ message: "User not found.", status: 404 });
      }

      // Сравнить пароли
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json({ message: "Incorrect password.", status: 401 });
      }

      if (!jwtSecret) {
          throw new Error('JWT_SECRET is not defined in environment variables.');
      }

      // токен
      const token = jwt.sign(
        { userEmail: user.email },
        jwtSecret,
        { expiresIn: '7d' }
      );

      return NextResponse.json({
        token,
        user: {
          email: user.email,
          name: user.name,
          balance: user.balance,
          role: user.role

        },
        status: 200
      });

    } catch (error) {
      console.error("Error in processing: ", error);
      return NextResponse.json({ message: "Error in processing. Please try again.", status: 500 });
    }
}
