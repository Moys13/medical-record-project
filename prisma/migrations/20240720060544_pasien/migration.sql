-- CreateTable
CREATE TABLE "pasien" (
    "id" SERIAL NOT NULL,
    "no_rm" VARCHAR(15) NOT NULL,
    "id_identitas" TEXT NOT NULL,
    "wna" VARCHAR(3) DEFAULT 'WNI',
    "nama_lengkap" VARCHAR(50) NOT NULL,
    "jenis_kelamin" VARCHAR(10) NOT NULL,
    "tgl_lahir" TIMESTAMP(3) NOT NULL,
    "tmpt_lahir" VARCHAR(50) NOT NULL,
    "agama" VARCHAR(10) NOT NULL,
    "alamat" VARCHAR(50) NOT NULL,
    "provinsi" VARCHAR(30) NOT NULL,
    "rt" VARCHAR(3) NOT NULL,
    "rw" VARCHAR(3) NOT NULL,
    "kecamatan" VARCHAR(20) NOT NULL,
    "kelurahan" VARCHAR(20) NOT NULL,
    "pekerjaan" VARCHAR(20) NOT NULL,
    "pernikahan" VARCHAR(15) NOT NULL,
    "pendidikan" VARCHAR(10) NOT NULL,
    "gol_darah" VARCHAR(2) NOT NULL,
    "no_asuransi" VARCHAR(15) NOT NULL,
    "ibu_kandung" VARCHAR(20) NOT NULL,
    "no_tlp" VARCHAR(12) NOT NULL,
    "tgl_masuk" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tgl_edit" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pasien_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pasien_no_rm_key" ON "pasien"("no_rm");
