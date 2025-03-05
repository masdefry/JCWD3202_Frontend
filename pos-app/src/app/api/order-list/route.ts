import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function POST(req: NextRequest){
    try {
        const { customerName, tableNumber, itemList, total } = await req.json(); 

        await Backendless.Data.of('OrderList').save({
            customerName,
            tableNumber,
            itemList: JSON.stringify(itemList),
            total,
        })

        return NextResponse.json({ message: 'Create Order List Success' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Create Order List Failed', error }, { status: 500 });
    }
}
