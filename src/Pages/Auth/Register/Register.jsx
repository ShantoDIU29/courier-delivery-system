import { FaGoogle } from "react-icons/fa";
import Logo from "../../../components/logo/logo";

const Register = () => {
  return (
    <div className="w-full max-w-[440px] pt-2">
      <div className="mb-9">
        <Logo />
      </div>

      <h1 className="text-[2.5rem] font-extrabold leading-none tracking-[-0.06em] text-[#0d0d0d]">
        Create an Account
      </h1>
      <p className="mt-2 text-base text-[#5a5a5a]">Register with ZapShift</p>

      <form className="mt-8 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3d]">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#9fca4b] focus:ring-2 focus:ring-[#dfeaad]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3d]">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#9fca4b] focus:ring-2 focus:ring-[#dfeaad]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3d]">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#9fca4b] focus:ring-2 focus:ring-[#dfeaad]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#d3e46a] px-4 py-3 text-base font-bold text-[#171717] transition hover:bg-[#c5dc57]"
        >
          Register
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-700">
        Already have an account?{" "}
        <a href="/login" className="font-semibold text-[#111111] underline">
          Login
        </a>
      </p>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#d9d9d9]" />
        <span className="text-sm text-[#7b7b7b]">Or</span>
        <div className="h-px flex-1 bg-[#d9d9d9]" />
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#d9d9d9] bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#4285F4]">
          <FaGoogle className="text-xs" />
        </span>
        Register with google
      </button>
    </div>
  );
};

export default Register;
