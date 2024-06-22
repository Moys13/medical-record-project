import Image from "next/image"
import Link from "next/link"
import inapImg from "../../public/assets/bed-svgrepo-com.svg"
import jalanImg from "../../public/assets/hospital-svgrepo-com.svg"
import pasienImg from "../../public/assets/patient-svgrepo-com.svg"
import homeImg from "../../public/assets/home-1392-svgrepo-com.svg"
import person from "../../public/assets/picture.png"
import logo from "../../public/assets/logo-rumah-sakit.png"
import { FaPerson, FaBedPulse, FaIdCardClip } from "react-icons/fa6";
import { MdOutlineLocalHospital } from "react-icons/md";


const Slidebar = () => {
    const menuPendaftaran = [
        {
            image: <FaPerson size="25" />,
            title: "Pasien",
            link: "/pasien"
        },
        {
            image: <MdOutlineLocalHospital size="25" />,
            title: "Rawat jalan",
            link: "/rawat-jalan"
        },
        {
            image: <FaBedPulse size="25" />,
            title: "Rawat Inap",
            link: "/rawat-inap"
        },
    ]
    const menuMasterData = [
        {
            image: <FaIdCardClip size="25" />,
            title: "Data Pasien",
            link: "/data-pasien"
        }
    ]
    return (
        <div className="h-screen" data-theme="dracula">
            <div className="py-3 text-gray-100 overflow-y-auto max-h-full mt-12">
                <div className="flex justify-start px-1 text-base">
                    <Link href={"/"}><Image src={logo} alt="Home" className="md:w-11 w-8 mr-7" /></Link>
                    <p className="hidden md:flex">Rumah Sakit Kasih Bunda</p>
                </div>
                <div className="md:grid grid-rows-2 grid-flow-col items-center justify-start px-1 mt-10 text-xs">
                    <Image src={person} alt="iconInap" className="md:w-10 w-8 rounded-full md:row-span-2" />
                    <div className="pl-2 hidden md:inline truncate">Wismoyo Bagas Laksono asdfk adfjdfe jasd</div>
                    <div className="pl-2 hidden md:inline truncate">Rekam Medis</div>
                </div>
                <Link className="flex justify-start mt-5 items-center h-10 w-full mb-1 px-2 hover:bg-neutral text-sm" href={"/"}>
                    <Image src={homeImg} alt="Person" className="w-6 mr-5" />
                    <p className="hidden md:inline">Dashboard</p>
                </Link>
                <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
                    <h3 className="hidden md:inline absolute -top-1/2 -translate-y-3 translate-x-3 bg-base-100 text-sm">Master Data</h3>
                </div>
                {menuMasterData.map((menu, index) => (
                    <Link key={index + 1} className="flex justify-start items-center h-10 w-full mb-1 px-2 hover:bg-neutral text-sm" href={menu.link}>
                        <div className="mr-5">{menu.image}</div>
                        <p className="hidden md:inline">{menu.title}</p>
                    </Link>
                ))}
                <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
                    <h3 className="hidden md:inline absolute -top-1/2 -translate-y-3 translate-x-3 bg-base-100 text-sm">Pendaftaran</h3>
                </div>
                {menuPendaftaran.map((menu, index) => (
                    <Link key={index + 1} className="flex justify-start items-center h-10 w-full mb-1 px-2 hover:bg-neutral text-sm" href={menu.link}>
                        <div className="mr-5">{menu.image}</div>
                        <p className="hidden md:inline">{menu.title}</p>
                    </Link>
                ))}
                <div className="mt-5 border-t-2 mb-3 border-gray-300 relative">
                    <h3 className="hidden md:block absolute -top-1/2 -translate-y-3 translate-x-3 bg-base-100 text-sm">Farmasi</h3>
                </div>

            </div>
        </div>
    )
}

export default Slidebar