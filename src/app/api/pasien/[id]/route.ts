
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

const delay = () => new Promise<void>(res => setTimeout(() => res(), 5000))


export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const pasien = await prisma.pasien.findUnique(
        {
            where: {
                id: id
            }
        }
    )
    return NextResponse.json(pasien);
}
