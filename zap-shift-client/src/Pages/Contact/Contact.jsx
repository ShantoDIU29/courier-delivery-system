import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    label: "LinkedIn",
    value: "Shanto Roy",
    href: "https://www.linkedin.com/in/shanto-roy-435007329/",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "Facebook",
    value: "Visit Facebook profile",
    href: "https://www.facebook.com/santoroy.99/",
    icon: FaFacebookF,
    external: true,
  },
  {
    label: "Email",
    value: "shantosr3559@gmail.com",
    href: "mailto:shantosr3559@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "WhatsApp",
    value: "01724-355967",
    href: "https://wa.me/8801724355967",
    icon: FaWhatsapp,
    external: true,
  },
  {
    label: "Phone",
    value: "01724-355967",
    href: "tel:+8801724355967",
    icon: FaPhone,
  },
];

const Contact = () => {
  return (
    <main className="px-5 py-12 sm:px-8 lg:px-12">
      <section className="rounded-3xl bg-[#063f45] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
          Contact ZapShift
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          How can we help?
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
          Our team can help with delivery questions and service information. If
          your question is about a parcel, have its tracking details ready.
        </p>
        <Link
          to="/coverage"
          className="mt-7 inline-flex rounded-full bg-lime-300 px-6 py-3 font-bold text-gray-950 transition hover:bg-lime-400"
        >
          View delivery coverage
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-[#063f45]">Contact details</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#9fca4b]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf2d4] text-lg text-[#063f45]">
                <Icon aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-gray-500">
                  {label}
                </span>
                <span className="block break-words font-bold text-[#063f45]">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
