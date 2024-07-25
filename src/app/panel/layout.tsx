import Navbar from "@/components/navbar";
import Slidebar from "@/components/Slidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex">
        <Slidebar />
        <div className="p-5 h-[calc(100vh-3rem)] overflow-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
