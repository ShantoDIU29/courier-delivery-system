
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../../../utils/api";

// Google Icon
const GoogleIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

const inputClass =
  "w-full h-[42px] rounded-lg border border-[#CBD5E1] bg-white px-3 text-[15px] text-[#0f172a] placeholder:text-[#94A3B8] outline-none transition focus:border-[#9fca4b] focus:ring-2 focus:ring-[#cdeb67]/40";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const registered = location.state?.registered;

  // Login Submit
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

      navigate("/dashboard");
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

  // Google Login
  const handleGoogleLogin = () => {
    window.location.href = `${apiBaseUrl}/api/auth/google`;
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white px-6 py-28 lg:justify-start lg:px-0 lg:pl-[171px]">

      {/* ZapShift Logo */}

      <Link
        to="/"
        className="absolute left-6 top-8 z-10 sm:left-10 sm:top-10 lg:left-14 lg:top-11"
      >
        <img
          src="/logo.svg"
          alt="ZapShift"
          className="h-11 w-auto"
        />
      </Link>

      {/* Login Content */}

      <div className="w-full max-w-[385px]">

        {/* Heading */}

        <h1 className="text-[38px] font-extrabold leading-tight tracking-[-0.04em] text-black sm:text-[46px] sm:leading-none">
          Welcome Back
        </h1>

        <p className="mt-2 text-base text-[#0f172a]">
          Login with ZapShift
        </p>

        {/* Registration Success Message */}

        {registered && (
          <p className="mt-4 text-sm text-green-700">
            Account created successfully. Please log in.
          </p>
        )}

        {/* Login Form */}

        <form onSubmit={handleSubmit} className="mt-6">

          {/* Email Field */}

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[#0f172a]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>

          {/* Password Field */}

          <div className="mt-3">
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-[#0f172a]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              autoComplete="current-password"
              className={inputClass}
            />
          </div>

          {/* Forgot Password */}

          <Link
            to="/forgot-password"
            className="mt-3 inline-block text-base text-[#6b7280] underline underline-offset-2 hover:text-[#8FA940]"
          >
            Forget Password?
          </Link>

          {/* Error Message */}

          {errorMessage && (
            <p
              role="alert"
              className="mt-3 text-sm text-red-600"
            >
              {errorMessage}
            </p>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 h-10 w-full rounded-lg bg-[#CAEB66] text-sm font-medium text-[#1f1f1f] transition hover:bg-[#bfe254] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Register Link */}

        <p className="mt-4 text-base text-[#6b7280]">
          Don’t have any account?{" "}
          <Link
            to="/register"
            className="text-[#8FA940] hover:underline"
          >
            Register
          </Link>
        </p>

        <p className="mt-3 text-sm text-[#6b7280]">
          Need help?{" "}
          <Link to="/contact" className="text-[#8FA940] hover:underline">
            Contact us
          </Link>
        </p>

        {/* OR Divider */}

        <p className="my-3 text-center text-base text-[#6b7280]">
          Or
        </p>

        {/* Google Login Button */}

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#E9ECF1] text-sm font-medium text-[#1f1f1f] transition hover:bg-[#dfe3ea]"
        >
          <GoogleIcon />
          Login with google
        </button>

      </div>
    </div>
  );
};

export default Login;
