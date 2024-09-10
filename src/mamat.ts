import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// export { default } from "next-auth/middleware";

// export const middleware = async (req: NextRequest) => {
//   const token = await getToken({ req });
//   const { pathname } = req.nextUrl;
//
//   if (!token && pathname !== "/login") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
//
//   if (token && pathname === "/login") {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }
//
//   return NextResponse.next();
// };
//
// export const config = {
//   matcher: [
//     "/dashboard",
//     "/pasien/:path*",
//     "/rawat-jalan:path*",
//     "/data-pasien:path*",
//     "/login",
//   ],
// };
