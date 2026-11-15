import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <main className="px-5 py-12 sm:px-8 lg:px-12">
      <section className="rounded-3xl bg-[#063f45] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
          ZapShift Pricing
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Delivery pricing
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
          Pricing details are coming soon. Contact us for help with your
          delivery requirements.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex rounded-full bg-lime-300 px-6 py-3 font-bold text-gray-950 transition hover:bg-lime-400"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
};

export default Pricing;
