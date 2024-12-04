"use client";

import Image from "next/image";
import Link from "next/link";
import homeImg from "../../../public/assets/home-1392-svgrepo-com.svg";
import logo from "../../../public/assets/logo-rumah-sakit.png";
import { FaPerson, FaBedPulse, FaIdCardClip } from "react-icons/fa6";
import { MdOutlineLocalHospital } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Profil } from "./profil";
import { RmPendaftaran, RmMasterdata } from "./RmMenu";

const Slidebar = () => {
  const pathname = usePathname();

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
        <RmMasterdata />
        <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
          <h3 className="hidden md:inline absolute -top-1/2 -translate-y-3 translate-x-3 bg-primary-content text-sm">
            Pendaftaran
          </h3>
        </div>
        <RmPendaftaran />
      </div>
    </div>
  );
};

export default Slidebar;
