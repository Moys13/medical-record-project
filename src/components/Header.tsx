import Image from "next/image"
import person from "../../public/assets/picture.png"
import Link from "next/link"
const Header = () => {
    return (
        <header className="flex items-end bg-gray-700 text-white text-sm h-8 drop-shadow-lg">
            <div className="px-2">
                <Link href={"/pasien"}>Pasien</Link>
            </div>
        </header>
    )
}

export default Header