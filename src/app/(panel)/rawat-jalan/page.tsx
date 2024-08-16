"use client";
import TextBox from "@/components/input/TextBox";
import { useState } from "react";

const RawatJalan = () => {
  const [noBPJS, setNoBPJS] = useState("");
  const [asuransi, setAsuransi] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [riwayat, setRiwayat] = useState("");
  const [alergi, setAlergi] = useState("");
  const [poli, setPoli] = useState("");
  return (
    <div className="p-5 w-full h-screen">
      <form action="">
        <TextBox
          value="Nomor BPJS (Optional)"
          onChange={(e) => setNoBPJS(e.target.value)}
        />
        <TextBox
          value="Asuransi Kesehatan (Opsional)"
          onChange={(e) => setAsuransi(e.target.value)}
        />
        <TextBox
          value="Keluhan Utama"
          onChange={(e) => setKeluhan(e.target.value)}
        />
        <TextBox
          value="Riwayat Penyakit"
          onChange={(e) => setRiwayat(e.target.value)}
        />
        <TextBox value="Alergi" onChange={(e) => setAlergi(e.target.value)} />
        <TextBox
          value="Poli Dituju"
          onChange={(e) => setPoli(e.target.value)}
        />
      </form>
    </div>
  );
};

export default RawatJalan;
