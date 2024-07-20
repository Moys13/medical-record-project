import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import ApiResponseHandle from "@/libs/apiResponseHandle";

const delay = () => new Promise<void>((res) => setTimeout(() => res(), 5000));
const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  try {
    const pasien = await prisma.pasien.findFirst({
      orderBy: {
        tgl_masuk: "desc",
      },
      select: {
        no_rm: true,
      },
    });
    if (!pasien) {
      return Response.json(ApiResponseHandle(404, pasien, "Not Found"), {
        status: 404,
      });
    }
    return Response.json(ApiResponseHandle(200, pasien, "Success"), {
      status: 200,
    });
  } catch (error) {
    return Response.json(ApiResponseHandle(500, null, "failed"), {
      status: 500,
    });
  }
};
