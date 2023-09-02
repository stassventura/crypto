import { NextResponse, NextRequest } from 'next/server';
import connect from "../database";
import Cryptocurrency from "../database/models/Cryptocurrency";

export async function GET(request: NextRequest) {
    try {
        await connect();
        const cryptocurrencys = await Cryptocurrency.find();
        return NextResponse.json(cryptocurrencys);
        
    } catch (error) {
        return new NextResponse("Error in fetching" + error, {status: 500});
    }
    
  }
