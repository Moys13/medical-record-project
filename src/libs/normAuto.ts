import { pasien } from "@prisma/client";

export default async function NormAuto() {
  async function getNorm() {
    const response = await fetch("http://localhost:3000/api/pasien/last", {
      cache: "no-cache",
    });
    return response.json();
  }
  const lastNorm = await getNorm();
  let result: string;

  if (lastNorm.data === null) {
    const yearNow = new Date().getFullYear().toString();
    result = yearNow + "00001";
    return result;
  } else {
    const year = lastNorm.data.no_rm.slice(0, 4);
    if (year == new Date().getFullYear().toString() || year == undefined) {
      let lastNumber = lastNorm.data.no_rm.slice(8);
      lastNumber++;
      if (lastNumber < 10) {
        result = year + "0000" + lastNumber;
        return result;
      } else if (lastNumber < 100) {
        result = year + "000" + lastNumber;
        return result;
      } else if (lastNumber < 1000) {
        result = year + "00" + lastNumber;
        return result;
      } else if (lastNumber < 10000) {
        result = year + "0" + lastNumber;
        return result;
      } else if (lastNumber < 100000) {
        result = year + lastNumber;
        return result;
      }
    } else {
      const yearNow = new Date().getFullYear().toString();
      result = yearNow + "00001";
      return result.toString();
    }
  }
}
