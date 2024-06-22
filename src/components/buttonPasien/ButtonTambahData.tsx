import type { pasien } from "@prisma/client";
import { SyntheticEvent } from "react";

const ButtonTambahData = (prop: {
    data: pasien[]
}) => {
    function coba(e: SyntheticEvent) {
        e.preventDefault()
        console.log(prop.data);
    }
    return (
        <button className="btn-blue rounded-md p-2 w-1/4 text-sm" onClick={(e) => coba(e)}>
            Tambah
        </button>
    )
}
export default ButtonTambahData;
