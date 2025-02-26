import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest){
    return NextResponse.json({ message: 'Hello World' });
};

// HTTP Method: GET, POST, PUT, PATCH, DELETE