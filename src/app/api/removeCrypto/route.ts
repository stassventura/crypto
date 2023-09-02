import { NextResponse, NextRequest } from 'next/server';
import connect from "../database";
import Cryptocurrency from "../database/models/Cryptocurrency";

export async function POST(request: NextRequest) {
    const res = await request.json();
    const { symbol, asset } = res;
    
    try {
        await connect();
        
        const cryptocurrency = await Cryptocurrency.findOne({ asset, symbol });

        if (!cryptocurrency) {
            return new NextResponse("Cryptocurrency not found.", { status: 404 });
        }

        cryptocurrency.display = false;

        await cryptocurrency.save();

        return new NextResponse('Updated successfully!');

    } catch (error) {
        return new NextResponse("Error in processing: " + error, {status: 500});
    }
}
