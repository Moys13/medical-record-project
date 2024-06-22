-- CreateTable
CREATE TABLE "pasien" (
    "id" SERIAL NOT NULL,
    "norm" VARCHAR(15) NOT NULL,
    "nik" TEXT NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "jeniskelamin" VARCHAR(10) NOT NULL,
    "tmptlahir" VARCHAR(50) NOT NULL,
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
    "notlp" VARCHAR(12) NOT NULL,
    "tglmasuk" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tgledit" TIMESTAMP(3) NOT NULL,
    "tgllahir" TEXT NOT NULL,

    CONSTRAINT "pasien_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pasien_norm_key" ON "pasien"("norm");

-- CreateIndex
CREATE UNIQUE INDEX "pasien_nik_key" ON "pasien"("nik");
