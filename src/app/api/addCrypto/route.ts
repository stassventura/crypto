import { NextResponse, NextRequest } from 'next/server';
import connect from "../database";
import Cryptocurrency from "../database/models/Cryptocurrency";

export async function POST(request: NextRequest) {
    const res = await request.json();
    const { symbol, asset } = res;
    
    try {
        await connect();
        
        // Поиск 
        const existingCryptocurrency = await Cryptocurrency.findOne({ asset, symbol });

        // Если криптовалюта существует
        if (existingCryptocurrency) {
            // Если display уже true
            if (existingCryptocurrency.display) {
                return new NextResponse("Cryptocurrency already exists and is displayed.", { status: 409 }); //  Conflict ??
            }
            
            // Если display false, обновляем на true
            existingCryptocurrency.display = true;
            await existingCryptocurrency.save();
            console.log('Updated display to true!');
            return new NextResponse('Updated display to true!');

        } else {
            const newCryptocurrency = new Cryptocurrency({
                asset,
                symbol
            });

            await newCryptocurrency.save();
            console.log('saved successfully!');
            return new NextResponse('saved successfully!');
        }

    } catch (error) {
        return new NextResponse("Error in processing: " + error, {status: 500});
    }
}
