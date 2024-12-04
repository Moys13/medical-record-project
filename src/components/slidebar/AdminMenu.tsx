import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPerson, FaBedPulse, FaIdCardClip } from "react-icons/fa6";

const menuMasterData = [
  {
    image: <FaIdCardClip size="25" />,
    title: "Data User",
    link: "/data-user",
  },
];

export const AdminMasterData = () => {
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
