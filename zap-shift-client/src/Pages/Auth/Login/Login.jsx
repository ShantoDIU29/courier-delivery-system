
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../../../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const registered = location.state?.registered;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      const result = await response.json();

      
      if (!response.ok) {
  throw new Error(result.message || "Login failed.");
}

localStorage.setItem("token", result.token);
localStorage.setItem("user", JSON.stringify(result.user));

navigate("/");

      
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[440px] pt-2">

      <h1 className="text-[2.5rem] font-extrabold leading-none tracking-[-0.06em] text-[#0d0d0d]">
        Welcome Back
      </h1>

      <p className="mt-2 text-base text-[#5a5a5a]">
        Login to your ZapShift account
      </p>

      {registered && (
        <p className="mt-4 text-sm text-green-700">
          Account created successfully. Please log in.
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 outline-none focus:border-[#9fca4b]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            className="w-full rounded-xl border border-[#d8d8d8] bg-white px-4 py-3 outline-none focus:border-[#9fca4b]"
          />
        </div>

        {errorMessage && (
          <p role="alert" className="text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-[#d3e46a] px-4 py-3 font-bold text-[#171717]"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-gray-700">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold underline"
        >
          Register
        </Link>
      </p>

    </div>
  );
};

export default Login;
