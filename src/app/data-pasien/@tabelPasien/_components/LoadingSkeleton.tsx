export default function LoadingSkeleton() {
  return (
    <div className="">
      <div className="flex justify-center py-3">
        <input
          type="text"
          className="border-2 border-gray-500 rounded-md text-sm px-1"
          placeholder="Cari NIK/Nama/Norm"
        />
        <button className="ml-3">Cari</button>
      </div>
      <div className=" rounded-md overflow-x-auto">
        <table className="border m-auto shadow-md table table-xs table-zebra">
          <thead className="text-sm bg-slate-300 text-left border-b-2 border-slate-500">
            <tr className="">
              <th className="px-2 py-1">No RM</th>
              <th className="px-2 py-1">NIK</th>
              <th className="px-2 py-1">Nama Lengkap</th>
              <th className="px-2 py-1">Tgl Masuk</th>
              <th className="px-2 py-1">Tgl Lahir</th>
              <th className="px-2 py-1">J Kelamin</th>
              <th className="px-2 py-1">Alamat</th>
              <th className="px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center skeleton" colSpan={8}>
                Loading Data
                <span className="ml-5 loading loading-dots loading-md"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <div>
          <button className="mr-5">prev</button>
          <button className="">next</button>
        </div>
        <div>
          <p>row 10/10</p>
        </div>
      </div>
    </div>
  );
}
