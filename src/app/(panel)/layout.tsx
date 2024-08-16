"use client";
import Navbar from "@/components/navbar";
import Slidebar from "@/components/slidebar/Slidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden" data-theme="dark">
      <Navbar />
      <div className="flex">
        <Slidebar />
        <div className="p-5 h-[calc(100vh-3rem)] overflow-auto w-full bg-base-100">
          {children}
        </div>
      </div>
    </section>
  );
}
