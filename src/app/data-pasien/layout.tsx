export default function DataPasienLayout({
  children,
  tabelPasien,
}: {
  children: React.ReactNode;
  tabelPasien: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {tabelPasien}
    </div>
  );
}
