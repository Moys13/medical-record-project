import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";
import type { pasien } from "@prisma/client";
import ApiResponseHandle from "@/libs/apiResponseHandle";
import moment from "moment";

const delay = () => new Promise<void>((res) => setTimeout(() => res(), 5000));

export const GET = async () => {
  try {
    const pasien = await prisma.pasien.findMany();
    if (pasien.length === 0) {
      return Response.json(ApiResponseHandle(404, pasien, "Empty"));
    }
    return Response.json(ApiResponseHandle(200, pasien, "Success"), {
      status: 200,
    });
  } catch (error: any) {
    return Response.json(ApiResponseHandle(500, null, error), {
      status: 500,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const body: pasien = await req.json();
    const pasien = await prisma.pasien.create({
      data: {
        no_rm: body.no_rm,
        id_identitas: body.id_identitas,
        wna: body.wna,
        nama_lengkap: body.nama_lengkap,
        jenis_kelamin: body.jenis_kelamin,
        gol_darah: body.gol_darah,
        tmpt_lahir: body.tmpt_lahir,
        tgl_lahir: body.tgl_lahir,
        agama: body.agama,
        alamat: body.alamat,
        provinsi: body.provinsi,
        rt: body.rt,
        rw: body.rw,
        kecamatan: body.kecamatan,
        kelurahan: body.kelurahan,
        pekerjaan: body.pekerjaan,
        pernikahan: body.pernikahan,
        pendidikan: body.pendidikan,
        no_tlp: body.no_tlp,
        no_asuransi: body.no_asuransi,
        ibu_kandung: body.ibu_kandung,
      },
    });
    return Response.json(ApiResponseHandle(200, pasien, "Success"), {
      status: 200,
    });
  } catch (error: any) {
    return Response.json(ApiResponseHandle(500, null, error), {
      status: 500,
    });
  }
};
