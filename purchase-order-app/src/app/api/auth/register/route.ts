import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try{
        const {username, password, email, role} = await req.json();

        const createdUser = await prisma.user.create({
            data: {
                username,
                password,
                email,
                role
            }
        })

        return NextResponse.json(createdUser, { status: 201, statusText: 'Register user success' });
    }catch(error){
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}
