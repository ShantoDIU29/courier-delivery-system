import { Link } from "react-router-dom";
import Logo from "../../../components/logo/logo";

const NavBar = () => {
  return (
    <nav className="navbar min-h-20 border border-blue-400 bg-base-100 px-5 shadow-sm lg:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            type="button"
            className="btn btn-ghost px-2 lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-10 mt-3 w-44 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <Link to="/coverage">Coverage</Link>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <a
          href="/"
          aria-label="ZapShift home"
          className="btn btn-ghost h-auto px-2 text-xl hover:bg-transparent"
        >
          <Logo />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-7 text-sm text-gray-600">
          <li>
            <a href="#services" className="hover:text-gray-950">
              Services
            </a>
          </li>
          <li>
            <Link to="/coverage" className="hover:text-gray-950">
              Coverage
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-950">
              About Us
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-950">
              Pricing
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-950">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-950">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <a
          href="#signin"
          className="btn btn-ghost hidden border border-gray-200 bg-white px-5 text-gray-600 shadow-none hover:bg-gray-50 sm:inline-flex"
        >
          Sign In
        </a>
        <a
          href="#signup"
          className="btn border-0 bg-lime-300 px-5 text-gray-950 shadow-none hover:bg-lime-400"
        >
          Sign Up
        </a>
        <a
          href="#signup"
          aria-label="Get started"
          className="btn btn-circle border-0 bg-gray-900 text-xl text-lime-300 shadow-none hover:bg-gray-700"
        >
          ↗
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
