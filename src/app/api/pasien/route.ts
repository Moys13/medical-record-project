import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

const delay = () => new Promise<void>(res => setTimeout(() => res(), 5000))

export const GET = async (req: Request) => {
    const pasien = await prisma.pasien.findMany()
    return NextResponse.json(pasien);
}