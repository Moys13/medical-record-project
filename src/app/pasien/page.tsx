'use client'
import { SyntheticEvent, useReducer, useState } from "react"
import Modal from "@/components/Modal"
import { useRouter } from "next/navigation"
import NormAuto from "../../libs/normAuto"
import { useForm, SubmitHandler } from "react-hook-form"
import type { Pasien } from "@/interface/formTypes"

const legions = [
    { id: 1, name: 'Islam' },
    { id: 2, name: 'Kristen' },
    { id: 3, name: 'Khatolik' },
    { id: 4, name: 'Hindu' },
    { id: 5, name: 'Buddha' },
]

const jenisKelamin = [
    { id: 1, name: "Laki-Laki" },
    { id: 2, name: "Perempuan" },
]

const statusNikah = [
    { id: 1, name: "Menikah" },
    { id: 2, name: "Belum Menikah" },
    { id: 3, name: "Janda" },
    { id: 4, name: "Duda" },
]

const golonganDarah = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "O" },
    { id: 4, name: "AB" },
]

const Pasien = () => {

    const router = useRouter();

    const [nik, setNik] = useState("")
    const [wna, setWna] = useState(false)
    const [nama, setNama] = useState("")
    const [tglLahir, setTglLahir] = useState("")
    const [tmptLahir, setTmptLahir] = useState("")
    const [jKelamin, setJkelamin] = useState("")
    const [alamat, setAlamat] = useState("")
    const [telepon, setTelepon] = useState("")
    const [modal, setModal] = useState(false)
    const [pekerjaan, setPekerjaan] = useState("")
    const [nikah, setNikah] = useState("")
    const [agama, setAgama] = useState("")
    const [golDarah, setGolDarah] = useState("")
    const [rt, setRt] = useState("")
    const [rw, setRw] = useState("")
    const [provinsi, setProvinsi] = useState("")
    const [kotaKab, setKotaKab] = useState("")
    const [kelurahan, setKelurahan] = useState("")
    const [kecamatan, setKecamatan] = useState("")
    const [pendidikan, setPendidikan] = useState("")
    const [noAsuransi, setNoasuransi] = useState("")
    const [ibuKandung, setIbuKandung] = useState("")
    const [tahun, setTahun] = useState(0)
    const [bulan, setBulan] = useState(0)
    const [hari, setHari] = useState(0)

    const handleModalOpen = () => setModal(true)
    const handleModalClose = () => setModal(false)

    const clearForm = () => {
        setNik("")
        setNama("")
        setTglLahir("")
        setTmptLahir("")
        setTahun(0)
        setBulan(0)
        setHari(0)
        setJkelamin("")
        setAlamat("")
        setTelepon("")
        setPekerjaan("")
        setNikah("")
        setAgama("")
        setGolDarah("")
        setRt("")
        setRw("")
        setProvinsi("")
        setKotaKab("")
        setKelurahan("")
        setKecamatan("")
        setPendidikan("")
        setNoasuransi("")
        setIbuKandung("")
    }

    const handleAge = (birthDateValue: string) => {
        setTglLahir(birthDateValue)
        const birthDate = new Date(birthDateValue)
        const today = new Date()

        let years = today.getFullYear() - birthDate.getFullYear()

        let months = today.getMonth() - birthDate.getMonth()
        if (months < 0) {
            years--
            months += 12
        }

        let days = today.getDate() - birthDate.getDate()
        if (days < 0) {
            months--
            let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += previousMonth.getDate();
        }

        setTahun(years)
        setBulan(months)
        setHari(days)
    }

    const saveHandler = async () => {
        const noRm = await NormAuto()
        await fetch("http://localhost:3000/api/pasien/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                norm: noRm,
                nik: nik,
                wna: wna,
                nama: nama,
                jeniskelamin: jKelamin,
                tmptlahir: tmptLahir,
                tgllahir: tglLahir,
                goldarah: golDarah,
                agama: agama,
                alamat: alamat,
                provinsi: provinsi,
                rt: rt,
                rw: rw,
                kecamatan: kecamatan,
                kelurahan: kelurahan,
                pekerjaan: pekerjaan,
                pernikahan: nikah,
                pendidikan: pendidikan,
                notlp: telepon,
                noasuransi: noAsuransi,
                ibukandung: ibuKandung
            })
        })
    }


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Pasien>()

    const onSubmit: SubmitHandler<Pasien> = (data) => console.log(data)

    return (
        <div className="outline outline-1 p-3 m-auto mb-5">
            <form action="" method="POST" className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="md:grid md:grid-cols-2 md:gap-3">
                    <div className="pb-1">
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/2'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Nama Lengkap</h2>
                                <input {...register("nama", { required: "Tolong diisi.", maxLength: { value: 3, message: "kintil" } })} type="text" className="outline-none w-full text-sm" value={nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/4'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">KTP/SIM</h2>
                                <input type="text" aria-invalid="true" className="outline-none w-full text-sm" value={nik} onChange={(e) => setNik(e.target.value)} />
                            </div>
                            <div className="my-2 h-fit">
                                <input type="checkbox" value={"WNA"} name="wna" className="mr-1" onChange={(e) => setWna(e.target.checked)} />
                                <label htmlFor="" className="text-sm text-gray-600">WNA</label>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Tmpt Lahir</h2>
                                <input type="text" className="outline-none w-full text-sm" value={tmptLahir} onChange={(e) => setTmptLahir(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Tgl Lahir</h2>
                                <input type="date" className="outline-none w-full text-sm" value={tglLahir} onChange={(e) => handleAge(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6 opacity-50'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Tahun</h2>
                                <input type="text" className="outline-none w-full text-sm text-center" disabled value={tahun} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6 opacity-50'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Bulan</h2>
                                <input type="text" className="outline-none w-full text-sm text-center" onChange={(e) => setNama} disabled value={bulan} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6 opacity-50'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Hari</h2>
                                <input type="text" className="outline-none w-full text-sm text-center" onChange={(e) => setNama} disabled value={hari} />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">J Kelamin</h2>
                                <select name="" id="" className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg" value={jKelamin} onChange={(e) => setJkelamin(e.target.value)}>
                                    {jenisKelamin.map((item) => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Darah</h2>
                                <select name="" id="" className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg" value={golDarah} onChange={(e) => setGolDarah(e.target.value)}>
                                    {golonganDarah.map((item) => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Agama</h2>
                                <select name="" id="" className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg" value={agama} onChange={(e) => setAgama(e.target.value)}>
                                    {legions.map((item) => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Status Nikah</h2>
                                <select name="" id="" className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg" value={nikah} onChange={(e) => setNikah(e.target.value)}>
                                    {statusNikah.map((item) => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/2'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Alamat</h2>
                                <input type="text" className="outline-none w-full text-sm" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">RT</h2>
                                <input type="text" className="outline-none w-full text-sm" value={rt} onChange={(e) => setRt(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">RW</h2>
                                <input type="text" className="outline-none w-full text-sm" value={rw} onChange={(e) => setRw(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/2'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Provinsi</h2>
                                <input type="text" className="outline-none w-full text-sm" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/2'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Kota</h2>
                                <input type="text" className="outline-none w-full text-sm" value={kotaKab} onChange={(e) => setKotaKab(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Kelurahan</h2>
                                <input type="text" className="outline-none w-full text-sm" value={kelurahan} onChange={(e) => setKelurahan(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Kecamatan</h2>
                                <input type="text" className="outline-none w-full text-sm" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Pekerjaan</h2>
                                <input type="text" className="outline-none w-full text-sm" value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Pendidikan</h2>
                                <input type="text" className="outline-none w-full text-sm" value={pendidikan} onChange={(e) => setPendidikan(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/3'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">No. Telepon</h2>
                                <input type="text" className="outline-none w-full text-sm" value={telepon} onChange={(e) => setTelepon(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3">
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/2'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">No. Asuransi</h2>
                                <input type="text" className="outline-none w-full text-sm" value={noAsuransi} onChange={(e) => setNoasuransi(e.target.value)} />
                            </div>
                            <div className='p-1 border border-black relative rounded-md mt-1 mb-3 w-1/2'>
                                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">Nama Ibu</h2>
                                <input type="text" className="outline-none w-full text-sm" value={ibuKandung} onChange={(e) => setIbuKandung(e.target.value)} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 h-5">
                            <button className="btn btn-info text-gray-700 btn-md">Simpan</button>
                            <button className="btn btn-error text-gray-700" onClick={clearForm}>Bersih</button>
                        </div>
                    </div>
                    {/* <TextBox value="NIK" onChange={(e) => setNik(e.target.value)} />
                    <TextBox value="Nama Lengkap" onChange={(e) => setNama(e.target.value)} />
                    <TextBox value="Tanggal Lahir" type="date" onChange={(e) => setTglLahir(e.target.value)} />
                    <TextBox value="Tempat Lahir" onChange={(e) => setTmptLahir(e.target.value)} />
                    <Radio options={["Laki-Laki", "Perempuan"]} name="jenis-kelamin" onChange={(e) => setJkelamin(e.target.value)} />
                    <TextBox value="Alamat" onChange={(e) => setAlamat(e.target.value)} />
                    <TextBox value="Nomor Telepon" onChange={(e) => setTelepon(e.target.value)} />
                    <TextBox value="Pekerjaan" onChange={(e) => setPekerjaan(e.target.value)} /> */}
                </div>
                {/* <div className="grid grid-cols-2 gap-2">
                    <button className="btn-red">BATAL</button>
                    <button className="btn-blue" onClick={(e) => handleSubmit(e)}>SIMPAN</button>
                </div> */}
                <Modal header="Konfirmasi Data" show={modal} onClose={handleModalClose}>
                    <p>Apakah anda yakin untuk menyimpan data ini?</p>
                    <p>agama: {nikah}</p>
                    <div className="grid grid-cols-2 gap-3 mt-5">
                        <button className="btn btn-info btn-sm text-gray-700" onClick={() => saveHandler()}>Konfirmasi</button>
                        <button className="btn btn-error btn-sm text-gray-700" onClick={handleModalClose}>Batal</button>
                    </div>
                </Modal>
            </form>
        </div>
    )
}

export default Pasien
