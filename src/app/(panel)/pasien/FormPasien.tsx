"use client";
import Modal from "@/components/Modal";
import NormAuto from "../../../libs/normAuto";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Pasien } from "@/interface/formTypes";
import moment from "moment";
import Alert from "@/components/Alert";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

export default function FormPasien() {
  const router = useRouter();

  const [alert, setAlert] = useState<{
    active: boolean;
    message?: string;
    type?: "success" | "warning" | "info" | "error";
  }>({
    active: false,
    message: "",
    type: "success",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [tahun, setTahun] = useState(0);
  const [bulan, setBulan] = useState(0);
  const [hari, setHari] = useState(0);

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
        setTimeout(() => {
          setAlert({
            active: true,
            message: "Data Berhasi Disimpan",
            type: "success",
          });
          <div>hahaha</div>;
        }, 1000);
      } catch (error) {
        setTimeout(() => {
          setAlert({
            active: true,
            message: "Data Tidak Tersimpan Error*",
            type: "error",
          });
          <div>hahaha</div>;
        }, 1000);
        console.log("Error:", error);
      } finally {
        router.refresh();
        handleModalClose();
      }
    } else {
      setModal(true);
    }
  };

  return (
    <div className="">
      <form
        action=""
        className="w-full outline outline-1 p-3 m-auto bg-base-200 outline-base-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="md:grid md:grid-cols-2 md:gap-3">
          <div className="pb-1">
            <div className="flex gap-3">
              <div className=" w-1/2  mt-1 mb-3">
                <div
                  className={
                    errors.namaLengkap?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Nama Lengkap</h2>
                  <input
                    {...register("namaLengkap", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.namaLengkap?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.idIdentitas?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">KTP/SIM</h2>
                  <input
                    {...register("idIdentitas", { required: true })}
                    type="text"
                    aria-invalid="true"
                    className="text-input"
                  />
                </div>
                {errors.idIdentitas?.type === "required" && (
                  <p role="alert" className="label-input-error">
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
                  className="mr-1 bg-red-500"
                />
                <label htmlFor="" className="text-sm text-base-content">
                  WNA
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div
                  className={
                    errors.tmptLahir?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Tmpt Lahir</h2>
                  <input
                    {...register("tmptLahir", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.tmptLahir?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className=" mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.tglLahir?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Tgl Lahir</h2>
                  <input
                    {...register("tglLahir", { required: true })}
                    type="date"
                    className="text-input"
                    onChange={handleAge}
                  />
                </div>
                {errors.tglLahir?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="div-input-error mt-1 mb-3 w-1/6 opacity-50">
                <h2 className="label-input">Tahun</h2>
                <input
                  type="text"
                  className="outline-none w-full text-sm text-center bg-base-200 text-base-content"
                  value={tahun}
                  readOnly={true}
                />
              </div>
              <div className="div-input-error mt-1 mb-3 w-1/6 opacity-50">
                <h2 className="label-input">Bulan</h2>
                <input
                  type="text"
                  className="outline-none w-full text-sm text-center bg-base-200 text-base-content"
                  value={bulan}
                  readOnly={true}
                />
              </div>
              <div className="div-input-error mt-1 mb-3 w-1/6 opacity-50">
                <h2 className="label-input">Hari</h2>
                <input
                  type="text"
                  className="outline-none w-full text-sm text-center bg-base-200 text-base-content"
                  value={hari}
                  readOnly={true}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.jenisKelamin?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-select-input">J Kelamin</h2>
                  <select
                    {...register("jenisKelamin", { required: true })}
                    className="select-input"
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
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.golDarah?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-select-input">Darah</h2>
                  <select
                    {...register("golDarah", { required: true })}
                    className="select-input"
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
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.agama?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-select-input">Agama</h2>
                  <select
                    {...register("agama", { required: true })}
                    className="select-input"
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
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.nikah?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-select-input">Status Nikah</h2>
                  <select
                    {...register("nikah", { required: true })}
                    className="select-input"
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
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div
                  className={
                    errors.alamat?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Alamat</h2>
                  <input
                    {...register("alamat", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.alamat?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.rt?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">RT</h2>
                  <input
                    {...register("rt", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.rt?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.rw?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">RW</h2>
                  <input
                    {...register("rw", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.rw?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div
                  className={
                    errors.provinsi?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Provinsi</h2>
                  <input
                    {...register("provinsi", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.provinsi?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/2">
                <div
                  className={
                    errors.kota?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Kota</h2>
                  <input
                    {...register("kota", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.kota?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *Tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.kelurahan?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Kelurahan</h2>
                  <input
                    {...register("kelurahan", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.kelurahan?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.kecamatan?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Kecamatan</h2>
                  <input
                    {...register("kecamatan", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.kecamatan?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.pekerjaan?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Pekerjaan</h2>
                  <input
                    {...register("pekerjaan", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.pekerjaan?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.pendidikan?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Pendidikan</h2>
                  <input
                    {...register("pendidikan", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.pendidikan?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
              <div className="mt-1 mb-3 w-1/3">
                <div
                  className={
                    errors.noTlp?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">No. Telepon</h2>
                  <input
                    {...register("noTlp", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.noTlp?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="mt-1 mb-3 w-1/2">
                <div
                  className={
                    errors.noAsuransi?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">No. Asuransi</h2>
                  <input
                    {...register("noAsuransi")}
                    type="text"
                    className="text-input"
                  />
                </div>
              </div>
              <div className="mt-1 mb-3 w-1/2">
                <div
                  className={
                    errors.ibuKandung?.type === "required"
                      ? "div-input"
                      : "div-input-error"
                  }
                >
                  <h2 className="label-input">Nama Ibu</h2>
                  <input
                    {...register("ibuKandung", { required: true })}
                    type="text"
                    className="text-input"
                  />
                </div>
                {errors.ibuKandung?.type === "required" && (
                  <p role="alert" className="label-input-error">
                    *tidak boleh kosong!
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn btn-info text-base-200 btn-md">
                Simpan
              </button>
              <button
                className="btn btn-error text-base-200"
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
      {alert.active && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ active: false })}
          autoCloseTime={3000}
        />
      )}
    </div>
  );
}
