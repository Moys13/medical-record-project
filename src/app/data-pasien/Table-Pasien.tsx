import type { pasien } from "@prisma/client"

const getPastients = async () => {
    const response = await fetch("http://localhost:3000/api/pasien", {
        cache: "no-store"
    })
    return response.json()
}

const TablePasien = async () => {
    const patients = await getPastients()
    return (
        <div className="w-full">
            <div className="flex justify-center py-3">
                <input type="text" className="border-2 border-gray-500 rounded-md text-sm px-1" placeholder="Cari NIK/Nama/Norm" />
                <button className="ml-3">Cari</button>
            </div>
            <div className="overflow-auto rounded-md">
                <table className="border m-auto w-full table-fixed shadow-md table table-zebra">
                    <thead className="text-sm bg-slate-300 text-left border-b-2 border-slate-500">
                        <tr className="">
                            <th className="px-2 py-1 w-24">No RM</th>
                            <th className="px-2 py-1 w-28">NIK</th>
                            <th className="px-2 py-1 w-36">Nama Lengkap</th>
                            <th className="px-2 py-1 w-24">Tgl Masuk</th>
                            <th className="px-2 py-1 w-20">Tgl Lahir</th>
                            <th className="px-2 py-1 w-24">J Kelamin</th>
                            <th className="px-2 py-1 w-44">Alamat</th>
                            <th className="px-2 py-1 w-20">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        {patients.map((patient: pasien) => (
                            <tr className="" key={patient.id}>
                                <td className="px-2 py-5">{patient.norm}</td>
                                <td className="px-2 py-5">{patient.nik}</td>
                                <td className="px-2 py-5">{patient.nama}</td>
                                <td className="px-2 py-5">{new Date(patient.tglmasuk).toLocaleString("id-ID", { dateStyle: "short" })}</td>
                                <td className="px-2 py-5">{patient.tgllahir}</td>
                                <td className="px-2 py-5">{patient.jeniskelamin}</td>
                                <td className="px-2 py-5">{patient.alamat}</td>
                                <td className="px-2 py-5">
                                    <button className="btn btn-xs btn-info text-neutral">Detail</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
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
    )
}

export default TablePasien;