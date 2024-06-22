import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const delay = () => new Promise<void>(res => setTimeout(() => res(), 5000))
const prisma = new PrismaClient()

export const GET = async (req: Request) => {
    const pasien = await prisma.pasien.findMany({
        orderBy: {
            id: 'desc',
        },
        select: {
            norm: true
        }
    })

    if (pasien.length === 0) {
        return NextResponse.json({ Message: "data kosong" })
    }

    return NextResponse.json(pasien);
}