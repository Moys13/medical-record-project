"use client";

import Modal from "@/components/Modal";
import generateRandomString from "@/libs/randomString";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { authOption } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

const Main = () => {
  return (
    <section
      className="hero min-h-screen w-screen"
      style={{
        backgroundImage:
          "url(https://indonesiaartikel.com/wp-content/uploads/2019/06/rumah-sakit-jakarta.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Selamat Datang Di Rumah Sakit Kasih Bunda
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            rerum fugiat tempora dolore quasi sed deleniti ratione eaque, nihil
            placeat repudiandae quis minus doloremque reiciendis repellendus
            voluptatem assumenda error amet molestiae omnis soluta! Ratione
            molestiae in accusamus reiciendis, optio quam maxime deleniti fugit
            ducimus et temporibus perspiciatis placeat iste autem.
          </p>
          <Link href="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
