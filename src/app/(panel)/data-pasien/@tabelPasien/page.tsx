import type { pasien } from "@prisma/client";
import axios from "axios";

const getPastients = async () => {
  const response = await axios.get("http://localhost:3000/api/pasien");
  return response.data;
};

const TablePasien = async () => {
  const patients = await getPastients();
  return (
    <div className="">
      <div className="flex justify-center py-3">
        <input
          type="text"
          className="border-2 borde-base-content rounded-md text-sm px-1"
          placeholder="Cari NIK/Nama/Norm"
        />
        <button className="btn btn-info btn-sm font-normal ml-2">Cari</button>
      </div>
      <div className=" rounded-md overflow-x-auto">
        <table className="border m-auto shadow-md table table-xs table-zebra">
          <thead className="text-sm bg-base-content text-base-100 text-left border-b-3 border-base-content">
            <tr className="">
              <th className="px-2 py-1">No RM</th>
              <th className="px-2 py-1">NIK</th>
              <th className="px-2 py-1">Nama Lengkap</th>
              <th className="px-2 py-1">Tgl Masuk</th>
              <th className="px-2 py-1">Tgl Lahir</th>
              <th className="px-2 py-1">J Kelamin</th>
              <th className="px-2 py-1">Alamat</th>
              <th className="px-2 py-1">Action</th>
            </tr>
          </thead>
          {patients.statusCode === 500 ||
          patients.statusCode === 404 ||
          patients.statusCode === 401 ? (
            <tbody>
              <tr>
                <td className="text-center" colSpan={8}>
                  Data Tidak tersedia....
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-xs">
              {patients.data.map((patient: pasien) => (
                <tr className="" key={patient.id}>
                  <td className="px-2 py-5">{patient.no_rm}</td>
                  <td className="px-2 py-5">{patient.id_identitas}</td>
                  <td className="px-2 py-5">{patient.nama_lengkap}</td>
                  <td className="px-2 py-5">
                    {new Date(patient.tgl_masuk).toLocaleString("id-ID", {
                      dateStyle: "medium",
                    })}
                  </td>
                  <td className="px-2 py-5">
                    {new Date(patient.tgl_lahir).toLocaleString("id-ID", {
                      dateStyle: "medium",
                    })}
                  </td>
                  <td className="px-2 py-5">{patient.jenis_kelamin}</td>
                  <td className="px-2 py-5">{patient.alamat}</td>
                  <td className="px-2 py-5">
                    <button className="btn btn-xs btn-info text-neutral">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <div>
          <button className="mr-5">prev</button>
          <button className="">next</button>
        </div>
        <div>
          <p>row 10/10</p>
        </div>
      </div>
    </div>
  );
};

export default TablePasien;
