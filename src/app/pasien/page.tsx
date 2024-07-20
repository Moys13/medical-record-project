"use client";
import { SyntheticEvent, useReducer, useState } from "react";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import NormAuto from "../../libs/normAuto";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Pasien } from "@/interface/formTypes";
import moment from "moment";
import Alert from "@/components/Alert";
import axios from "axios";

const legions = [
  { id: 1, name: "Islam" },
  { id: 2, name: "Kristen" },
  { id: 3, name: "Khatolik" },
  { id: 4, name: "Hindu" },
  { id: 5, name: "Buddha" },
];

const jenisKelamin = [
  { id: 1, name: "Laki-Laki" },
  { id: 2, name: "Perempuan" },
];

const statusNikah = [
  { id: 1, name: "Menikah" },
  { id: 2, name: "Belum Menikah" },
  { id: 3, name: "Janda" },
  { id: 4, name: "Duda" },
];

const golonganDarah = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "O" },
  { id: 4, name: "AB" },
];

const Pasien = () => {
  const router = useRouter();

  const test = async () => {
    await NormAuto();
  };

  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);
  const [tahun, setTahun] = useState(0);
  const [bulan, setBulan] = useState(0);
  const [hari, setHari] = useState(0);

  const handleModalOpen = () => setModal(true);
  const handleModalClose = () => setModal(false);

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const birthDate = new Date(e.target.value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();

    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }

    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
      months--;
      let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    setTahun(years);
    setBulan(months);
    setHari(days);
    setValue("tglLahir", e.target.value, { shouldValidate: true });
  };

  const saveHandler = async (data: Pasien) => {};

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Pasien>();

  const onSubmit: SubmitHandler<Pasien> = async (data) => {
    if (modal === true) {
      try {
        const noRm: any = await NormAuto();
        data.noRm = noRm;
        data.wna = data.wna ? "WNA" : "WNI";
        data.tglLahir = moment(data.tglLahir).toISOString();
        await axios.post("http://localhost:3000/api/pasien", {
          no_rm: data.noRm,
          id_identitas: data.idIdentitas,
          wna: data.wna,
          nama_lengkap: data.namaLengkap,
          jenis_kelamin: data.jenisKelamin,
          tmpt_lahir: data.tmptLahir,
          tgl_lahir: data.tglLahir,
          gol_darah: data.golDarah,
          agama: data.agama,
          alamat: data.alamat,
          provinsi: data.provinsi,
          rt: data.rt,
          rw: data.rw,
          kecamatan: data.kecamatan,
          kelurahan: data.kelurahan,
          pekerjaan: data.pekerjaan,
          pernikahan: data.nikah,
          pendidikan: data.pendidikan,
          no_tlp: data.noTlp,
          no_asuransi: data.noAsuransi,
          ibu_kandung: data.ibuKandung,
        });
      } catch (error) {
        console.log("Error:", error);
      } finally {
        handleModalClose();
        setTimeout(() => {
          setAlert(true);
        }, 1000);
        router.refresh();
      }
    } else {
      setModal(true);
    }
  };

  return (
    <div className="">
      <form
        action=""
        className="w-full outline outline-1 p-3 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="md:grid md:grid-cols-2 md:gap-3">
          <div className="pb-1">
            <div className="flex gap-3">
              <div className=" w-1/2  mt-1 mb-3">
                <div
                  className={
                    errors.namaLengkap?.type === "required"
                      ? "p-1 border border-red-600 relative rounded-md"
                      : "p-1 border border-black relative rounded-md"
                  }
                >
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Nama Lengkap
                  </h2>
                  <input
                    {...register("namaLengkap", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.namaLengkap?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.idIdentitas?.type === "required"
                      ? "p-1 border border-red-600 relative rounded-md"
                      : "p-1 border border-black relative rounded-md"
                  }
                >
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    KTP/SIM
                  </h2>
                  <input
                    {...register("idIdentitas", { required: true })}
                    type="text"
                    aria-invalid="true"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.idIdentitas?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="my-2 h-fit">
                <input
                  {...register("wna")}
                  type="checkbox"
                  value={"WNA"}
                  name="wna"
                  className="mr-1"
                />
                <label htmlFor="" className="text-sm text-gray-600">
                  WNA
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div
                  className={
                    errors.tmptLahir?.type === "required"
                      ? "p-1 border border-red-600 relative rounded-md"
                      : "p-1 border border-black relative rounded-md"
                  }
                >
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Tmpt Lahir
                  </h2>
                  <input
                    {...register("tmptLahir", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.tmptLahir?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className=" mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.tglLahir?.type === "required"
                      ? "p-1 border border-red-600 relative rounded-md"
                      : "p-1 border border-black relative rounded-md"
                  }
                >
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Tgl Lahir
                  </h2>
                  <input
                    {...register("tglLahir", { required: true })}
                    type="date"
                    className="outline-none w-full text-sm"
                    onChange={handleAge}
                  />
                </div>
                {errors.tglLahir?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6 opacity-50">
                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                  Tahun
                </h2>
                <input
                  type="text"
                  className="outline-none w-full text-sm text-center"
                  value={tahun}
                  readOnly={true}
                />
              </div>
              <div className="p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6 opacity-50">
                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                  Bulan
                </h2>
                <input
                  type="text"
                  className="outline-none w-full text-sm text-center"
                  value={bulan}
                  readOnly={true}
                />
              </div>
              <div className="p-1 border border-black relative rounded-md mt-1 mb-3 w-1/6 opacity-50">
                <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                  Hari
                </h2>
                <input
                  type="text"
                  className="outline-none w-full text-sm text-center"
                  value={hari}
                  readOnly={true}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/3 bg-white text-gray-600 text-sm">
                    J Kelamin
                  </h2>
                  <select
                    {...register("jenisKelamin", { required: true })}
                    className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg"
                  >
                    <option value="">-</option>
                    {jenisKelamin.map((item) => (
                      <option value={item.name} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.jenisKelamin?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md ">
                  <h2 className="absolute -top-1/2 translate-y-1/3 bg-white text-gray-600 text-sm">
                    Darah
                  </h2>
                  <select
                    {...register("golDarah", { required: true })}
                    className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg"
                  >
                    <option value="">-</option>
                    {golonganDarah.map((item) => (
                      <option value={item.name} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.golDarah?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/3 bg-white text-gray-600 text-sm">
                    Agama
                  </h2>
                  <select
                    {...register("agama", { required: true })}
                    className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg"
                  >
                    <option value="">-</option>
                    {legions.map((item) => (
                      <option value={item.name} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.agama?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/3 bg-white text-gray-600 text-sm">
                    Status Nikah
                  </h2>
                  <select
                    {...register("nikah", { required: true })}
                    className="select select-sm w-full max-w-xs text-sm border-none focus:ring-0 focus:border-transparent focus:outline-none rounded-lg"
                  >
                    <option value="">-</option>
                    {statusNikah.map((item) => (
                      <option value={item.name} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.nikah?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Alamat
                  </h2>
                  <input
                    {...register("alamat", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.alamat?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    RT
                  </h2>
                  <input
                    {...register("rt", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.rt?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    RW
                  </h2>
                  <input
                    {...register("rw", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.rw?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Provinsi
                  </h2>
                  <input
                    {...register("provinsi", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.provinsi?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/2">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Kota
                  </h2>
                  <input
                    {...register("kota", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.kota?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Kelurahan
                  </h2>
                  <input
                    {...register("kelurahan", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.kelurahan?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Kecamatan
                  </h2>
                  <input
                    {...register("kecamatan", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.kecamatan?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Pekerjaan
                  </h2>
                  <input
                    {...register("pekerjaan", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.pekerjaan?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Pendidikan
                  </h2>
                  <input
                    {...register("pendidikan", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.pendidikan?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    No. Telepon
                  </h2>
                  <input
                    {...register("noTlp", { required: true })}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
                {errors.noTlp?.type === "required" && (
                  <p role="alert" className="text-xs text-red-600">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    No. Asuransi
                  </h2>
                  <input
                    {...register("noAsuransi")}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
              </div>
              <div className="mt-1 mb-3 w-1/2">
                <div className="p-1 border border-black relative rounded-md">
                  <h2 className="absolute -top-1/2 translate-y-1/4 bg-white text-gray-600 text-sm">
                    Nama Ibu
                  </h2>
                  <input
                    {...register("ibuKandung")}
                    type="text"
                    className="outline-none w-full text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn btn-info text-gray-700 btn-md">
                Simpan
              </button>
              <button
                className="btn btn-error text-gray-700"
                type="reset"
                onClick={() => reset()}
              >
                Bersih
              </button>
            </div>
          </div>
        </div>
        <Modal header="Konfirmasi Data" show={modal} onClose={handleModalClose}>
          <p>Apakah anda yakin untuk menyimpan data ini?</p>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <button
              className="btn btn-info btn-sm text-gray-700"
              type="submit"
              autoFocus
            >
              Konfirmasi
            </button>
            <button
              className="btn btn-error btn-sm text-gray-700"
              type="reset"
              onClick={handleModalClose}
            >
              Batal
            </button>
          </div>
        </Modal>
      </form>
      {alert && (
        <Alert
          message="Data Berhasil Disimpan."
          type="success"
          onClose={() => setAlert(false)}
          autoCloseTime={3000}
        />
      )}
    </div>
  );
};

export default Pasien;
