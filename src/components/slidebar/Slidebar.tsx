"use client";

import Image from "next/image";
import Link from "next/link";
import homeImg from "../../../public/assets/home-1392-svgrepo-com.svg";
import logo from "../../../public/assets/logo-rumah-sakit.png";
import { FaPerson, FaBedPulse, FaIdCardClip } from "react-icons/fa6";
import { MdOutlineLocalHospital } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Profil } from "./profil";

const Slidebar = () => {
  const pathname = usePathname();

  const menuPendaftaran = [
    {
      image: <FaPerson size="25" />,
      title: "Pasien",
      link: "/pasien",
    },
    {
      image: <MdOutlineLocalHospital size="25" />,
      title: "Rawat jalan",
      link: "/rawat-jalan",
    },
    {
      image: <FaBedPulse size="25" />,
      title: "Rawat Inap",
      link: "/rawat-inap",
    },
  ];
  const menuMasterData = [
    {
      image: <FaIdCardClip size="25" />,
      title: "Data Pasien",
      link: "/data-pasien",
    },
  ];
  return (
    <div className="h-screen md:w-1/4 bg-primary-content" data-theme="dark">
      <div className="py-3 text-base-content overflow-y-auto h-full mt-5">
        <div className="flex justify-start px-1 text-base">
          <Link href={"/dashboard"}>
            <Image src={logo} alt="Home" className="md:w-11 w-8 mr-7" />
          </Link>
          <p className="hidden md:flex">Rumah Sakit Kasih Bunda</p>
        </div>
        <Profil />
        <Link
          className={`flex justify-start mt-5 items-center h-10 w-full mb-1 px-2 hover:bg-neutral hover:text-neutral-content text-sm ${
            pathname === "/dashboard" ? "bg-neutral text-neutral-content" : " "
          }`}
          href={"/dashboard"}
        >
          <Image src={homeImg} alt="Person" className="w-6 mr-5" />
          <p className="hidden md:inline">Dashboard</p>
        </Link>
        <div className="mt-5 border-t-2 mb-3 border-base-content relative">
          <h3 className="hidden md:inline absolute -top-1/2 -translate-y-3 translate-x-3 bg-primary-content text-sm">
            Master Data
          </h3>
        </div>
        {menuMasterData.map((menu, index) => (
          <Link
            key={index + 1}
            className={`flex justify-start items-center h-10 w-full mb-1 px-2 hover:bg-neutral hover:text-neutral-content text-sm ${
              pathname === menu.link ? "bg-neutral text-neutral-content" : " "
            }`}
            href={menu.link}
          >
            <div className="mr-5">{menu.image}</div>
            <p className="hidden md:inline">{menu.title}</p>
          </Link>
        ))}
        <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
          <h3 className="hidden md:inline absolute -top-1/2 -translate-y-3 translate-x-3 bg-primary-content text-sm">
            Pendaftaran
          </h3>
        </div>
        {menuPendaftaran.map((menu, index) => (
          <Link
            key={index + 1}
            className={`flex justify-start items-center h-10 w-full mb-1 px-2 hover:bg-neutral hover:text-neutral-content ${
              pathname === menu.link ? "bg-neutral text-neutral-content" : " "
            } text-sm`}
            href={menu.link}
          >
            <div className="mr-5">{menu.image}</div>
            <p className="hidden md:inline">{menu.title}</p>
          </Link>
        ))}
        <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
          <h3 className="hidden md:block absolute -top-1/2 -translate-y-3 translate-x-3 bg-primary-content text-sm">
            Farmasi
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
