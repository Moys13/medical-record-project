export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/pasien/:path*", "/rawat-jalan:path*", "/data-pasien:path*"],
};
