"use client";

import Image from "next/image";
import Link from "next/link";
import homeImg from "../../../public/assets/home-1392-svgrepo-com.svg";
import { FaPerson, FaBedPulse, FaIdCardClip } from "react-icons/fa6";
import { MdOutlineLocalHospital } from "react-icons/md";
import { usePathname } from "next/navigation";

const menuMasterData = [
  {
    image: <FaIdCardClip size="25" />,
    title: "Data Pasien",
    link: "/data-pasien",
  },
];

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

export const RmMasterdata = () => {
  const pathname = usePathname();
  return (
    <>
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
    </>
  );
};

export const RmPendaftaran = () => {
  const pathname = usePathname();
  return (
    <>
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
    </>
  );
};
