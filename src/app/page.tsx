import Image from "next/image";
import pasienImg from "../../public/assets/patient-svgrepo-com.svg";

const Home = () => {
  return (
    <main className="max-w-screen-xl min-w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid-flow-row gap-3 text-slate-100">
        <div className="card-dashboard flex">
          <Image src={pasienImg} alt="bgimage" className="md:w-16 w-10 opacity-50 mx-1 md:mx-0" />
          <div className="grid grid-rows-2 md:my-auto">
            <p className="text-phone-md md:text-base">Data pasien</p>
            <p className="text-phone-sm md:text-xs">Data pasien terdaftar di rumah sakit</p>
          </div>
        </div> 
        <div className="card-dashboard flex">
          <Image src={pasienImg} alt="bgimage" className="md:w-16 w-10 opacity-50 mx-1 md:mx-0" />
          <div className="grid grid-rows-2 md:my-auto">
            <p className="text-phone-md md:text-base">Data pasien</p>
            <p className="text-phone-sm md:text-xs">Data pasien terdaftar di rumah sakit</p>
          </div>
        </div>
        <div className="card-dashboard flex">
          <Image src={pasienImg} alt="bgimage" className="md:w-16 w-10 opacity-50 mx-1 md:mx-0" />
          <div className="grid grid-rows-2 md:my-auto">
            <p className="text-phone-md md:text-base">Data pasien</p>
            <p className="text-phone-sm md:text-xs">Data pasien terdaftar di rumah sakit</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          kdjsafkj
        </div>
        <div>
          kdjsafkj asdklfjsklfj
        </div>
      </div>
    </main>
  )
}
export default Home
