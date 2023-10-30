import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET() {

    const tasks = await prisma.tasks.findMany()
    console.log(tasks)
    return NextResponse.json(tasks)
}

export async function POST(request) {
    const { tittle, description } = await request.json()
    const NewTask = await prisma.tasks.create({
        data: {
            tittle,
            description
        }
    })
    return NextResponse.json(NewTask)
}