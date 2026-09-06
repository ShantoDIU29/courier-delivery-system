import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../components/logo/logo";

export default function Footer() {
  return (
    <footer className="mx-4 mt-10 rounded-3xl bg-[#0b0b0b] px-6 py-12 text-center text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Logo />
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-white/75 sm:text-sm">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <nav className="mt-6 border-y border-dashed border-[#0a5960]/70 py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-white/80 sm:text-sm">
            {[
              "Services",
              "Coverage",
              "About Us",
              "Pricing",
              "Blog",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="transition hover:text-lime-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex justify-center gap-4">
          <a
            aria-label="LinkedIn"
            href="#linkedin"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1677a8] text-sm transition hover:scale-105"
          >
            <FaLinkedinIn />
          </a>
          <a
            aria-label="X"
            href="#x"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm text-black transition hover:scale-105"
          >
            <FaXTwitter />
          </a>
          <a
            aria-label="Facebook"
            href="#facebook"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#287be0] text-sm transition hover:scale-105"
          >
            <FaFacebookF />
          </a>
          <a
            aria-label="YouTube"
            href="#youtube"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f20d18] text-sm transition hover:scale-105"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
