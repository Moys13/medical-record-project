import Image from "next/image";
import person from "../../../public/assets/picture.png";
import { useSession } from "next-auth/react";

export const Profil = () => {
  const { data: session } = useSession();
  return (
    <div className="md:grid grid-rows-2 grid-flow-col items-center justify-start px-1 mt-10 text-xs cursor-pointer">
      <Image
        src={person}
        alt="iconInap"
        className="md:w-10 w-8 rounded-full md:row-span-2"
      />
      <div className="pl-2 hidden md:inline truncate">
        {session === undefined && (
          <span className="ml-1 loading loading-dots loading-xs"></span>
        )}
        {session?.user?.name}
      </div>
      <div className="pl-2 hidden md:inline truncate">Rekam Medis</div>
    </div>
  );
};
