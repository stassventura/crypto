import { NextResponse, NextRequest } from 'next/server';
import connect from "../../database";
import User from '@/app/api/database/models/User';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface ExtendedJwtPayload extends JwtPayload {
    userEmail: string;
}

export async function GET(request: NextRequest) {
    try {
        await connect();

        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return NextResponse.json({ message: "Authorization header missing.", status: 401 });
        } 

        const token = authHeader.split(' ')[1];
        if (!token) {
            return NextResponse.json({ message: "Token missing or malformed.", status: 401 });
        }

        let decodedToken: ExtendedJwtPayload;

        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as ExtendedJwtPayload;
        } catch (err) {
            return NextResponse.json({ message: "Invalid token.", status: 403 });
        }

        const user = await User.findOne({ email: decodedToken.userEmail });
        if (!user) {
            return NextResponse.json({ message: "User not found.", status: 404 });
        }

        const userData = {
            email: user.email,
            name: user.name,
            balance: user.balance,
            role: user.role
        };

        return NextResponse.json({ user: userData, status: 200 });

    } catch (error) {
        console.error("Error in processing: ", error);
        return NextResponse.json({ message: "Error in processing. Please try again.", status: 500 });
    }
}
