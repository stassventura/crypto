import { NextResponse, NextRequest } from 'next/server';
import connect from "../database";
import User from '@/app/api/database/models/User';

export async function POST(request: NextRequest) {
    const { email, currency, amount } = await request.json();

    if (!email || !currency || amount === undefined) {
      return NextResponse.json({ message: "All fields are required.", status: 400 });
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) {
        return NextResponse.json({ message: "Invalid amount.", status: 400 });
    }

    try {
      await connect();

      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json({ message: "User not found.", status: 404 });
      }

      // Обновляем баланс пользователя
      const update: any = {};
      if(user.balance[currency] === undefined) {
          update[`balance.${currency}`] = numAmount; // Если нет, инициализируем входящей суммой
      } else {
          update[`balance.${currency}`] = user.balance[currency] + numAmount; // Иначе прибавляем к текущему балансу
      }

      await User.updateOne({ email }, { $set: update });

      const updatedUser = await User.findOne({ email });

      return NextResponse.json({ message: `Added ${amount} ${currency} to ${email}'s balance.`, status: 200 });

    } catch (error) {
      console.error("Error in processing: ", error);
      return NextResponse.json({ message: "Error in processing. Please try again.", status: 500 });
    }
}
