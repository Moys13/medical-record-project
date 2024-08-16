"use client";

import Image from "next/image";
import Link from "next/link";
import homeImg from "../../../public/assets/home-1392-svgrepo-com.svg";
import { FaPerson, FaBedPulse, FaIdCardClip } from "react-icons/fa6";
import { MdOutlineLocalHospital } from "react-icons/md";
import { usePathname } from "next/navigation";

const Menu = () => {
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
    <>
      <Link
        className={`flex justify-start mt-5 items-center h-10 w-full mb-1 px-2 hover:bg-neutral text-sm bg-neutral`}
        href={"/"}
      >
        <Image src={homeImg} alt="Person" className="w-6 mr-5" />
        <p className="hidden md:inline">Dashboard</p>
      </Link>
      <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
        <h3 className="hidden md:inline absolute -top-1/2 -translate-y-3 translate-x-3 bg-base-100 text-sm">
          Master Data
        </h3>
      </div>
      {menuMasterData.map((menu, index) => (
        <Link
          key={index + 1}
          className={`flex justify-start items-center h-10 w-full mb-1 px-2 hover:bg-neutral text-sm ${pathname === menu.link ? "bg-neutral" : " "}`}
          href={menu.link}
        >
          <div className="mr-5">{menu.image}</div>
          <p className="hidden md:inline">{menu.title}</p>
        </Link>
      ))}
      <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
        <h3 className="hidden md:inline absolute -top-1/2 -translate-y-3 translate-x-3 bg-base-100 text-sm">
          Pendaftaran
        </h3>
      </div>
      {menuPendaftaran.map((menu, index) => (
        <Link
          key={index + 1}
          className={`flex justify-start items-center h-10 w-full mb-1 px-2 hover:bg-neutral ${pathname === menu.link ? "bg-neutral " : " "} text-sm`}
          href={menu.link}
        >
          <div className="mr-5">{menu.image}</div>
          <p className="hidden md:inline">{menu.title}</p>
        </Link>
      ))}
      <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
        <h3 className="hidden md:block absolute -top-1/2 -translate-y-3 translate-x-3 bg-base-100 text-sm">
          Farmasi
        </h3>
      </div>
    </>
  );
};
export default Menu;
