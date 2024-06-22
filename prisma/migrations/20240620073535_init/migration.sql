/*
  Warnings:

  - Added the required column `goldarah` to the `pasien` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ibukandung` to the `pasien` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noasuransi` to the `pasien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pasien" ADD COLUMN     "goldarah" VARCHAR(2) NOT NULL,
ADD COLUMN     "ibukandung" VARCHAR(20) NOT NULL,
ADD COLUMN     "noasuransi" VARCHAR(15) NOT NULL,
ADD COLUMN     "wna" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "tgledit" DROP NOT NULL,
ALTER COLUMN "tgllahir" DROP NOT NULL;
