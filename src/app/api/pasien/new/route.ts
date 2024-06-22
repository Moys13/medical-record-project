import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { pasien } from "@prisma/client";

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    const body: pasien = await req.json();
    const pasien = await prisma.pasien.create({
        data: {
            norm: body.norm,
            nik: body.nik,
            wna: body.wna,
            nama: body.nama,
            jeniskelamin: body.jeniskelamin,
            goldarah: body.goldarah,
            tmptlahir: body.tmptlahir,
            tgllahir: body.tgllahir,
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
            notlp: body.notlp,
            noasuransi: body.noasuransi,
            ibukandung: body.ibukandung
        }
    })
    return NextResponse.json(pasien)
}