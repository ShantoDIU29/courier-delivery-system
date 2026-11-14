import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Logo from "../../../components/logo/logo";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData(event.currentTarget);
const apiUrl = (
  import.meta.env.VITE_API_URL || "http://localhost:5002"
).replace(/\/$/, "");
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to create your account.");
      }

      form.reset();
      setSuccessMessage("Account created successfully. You can now log in.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to create your account. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[440px] pt-2">
      <div className="mb-9">
        <Logo />
      </div>

      <h1 className="text-[2.5rem] font-extrabold leading-none tracking-[-0.06em] text-[#0d0d0d]">
        Create an Account
      </h1>
      <p className="mt-2 text-base text-[#5a5a5a]">Register with ZapShift</p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="register-name"
            className="mb-2 block text-sm font-medium text-[#3d3d3d]"
          >
            Name
          </label>
          <input
            id="register-name"
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="name"
            required
            maxLength={100}
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#9fca4b] focus:ring-2 focus:ring-[#dfeaad]"
          />
        </div>

        <div>
          <label
            htmlFor="register-email"
            className="mb-2 block text-sm font-medium text-[#3d3d3d]"
          >
            Email
          </label>
          <input
            id="register-email"
            name="email"
            type="email"
            placeholder="Email"
            required
            autoComplete="email"
            title="Please enter a valid email address"
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#9fca4b] focus:ring-2 focus:ring-[#dfeaad]"
          />
        </div>

        <div>
          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-medium text-[#3d3d3d]"
          >
            Password
          </label>
          <input
            id="register-password"
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={8}
            maxLength={20}
            autoComplete="new-password"
            title="Password must be 8 to 20 characters long"
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#9fca4b] focus:ring-2 focus:ring-[#dfeaad]"
          />
        </div>

        {errorMessage && (
          <p role="alert" className="text-sm text-red-600">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p role="status" className="text-sm text-green-700">
            {successMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-[#d3e46a] px-4 py-3 text-base font-bold text-[#171717] transition hover:bg-[#c5dc57]"
        >
          {isSubmitting ? "Creating account..." : "Register"}
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
