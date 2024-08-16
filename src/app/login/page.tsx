"use client";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoChevronBackCircle } from "react-icons/io5";
import { authOption } from "../api/auth/[...nextauth]/route";

interface Login {
  username: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = (data) => {
    signIn("credentials", { username: data.username, password: data.password });
  };

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage:
          "url(https://indonesiaartikel.com/wp-content/uploads/2019/06/rumah-sakit-jakarta.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-neutral-content lg:mr-28 w-full">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="lg:pl-28 w-full">
          <div className="card bg-base-200  max-w-sm shrink-0 shadow-2xl ">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <button className="absolute left-0 top-0 m-5">
          <Link href="/">
            <IoChevronBackCircle color="white" size={40} />
          </Link>
        </button>
      </div>
    </div>
  );
}
