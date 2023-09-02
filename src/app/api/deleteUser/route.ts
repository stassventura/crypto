import { NextResponse, NextRequest } from 'next/server';
import connect from "../database";
import User from '@/app/api/database/models/User';

export async function DELETE(request: NextRequest) {
    const { email } = await request.json();
    console.log("Call")
    if (!email) {
        return new NextResponse("Email is required.", { status: 400 });
    }

    try {
        await connect();

        const user = await User.findOneAndDelete({ email: email });

        // Если пользователь не найден
        if (!user) {
            return new NextResponse("User not found.", { status: 404 });
        }

        return new NextResponse("User deleted successfully.", { status: 200 });

    } catch (error) {
        console.error("Error in processing: ", error);
        return new NextResponse("Error in processing. Please try again.", { status: 500 });
    }
}
