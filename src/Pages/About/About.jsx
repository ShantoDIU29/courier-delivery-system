import { Link } from "react-router-dom";

const priorities = [
  {
    title: "Dependable delivery",
    description:
      "We help individuals and businesses send parcels with convenient delivery options across Bangladesh.",
  },
  {
    title: "Delivery visibility",
    description:
      "Parcel tracking helps customers stay informed from pickup through delivery.",
  },
  {
    title: "Care and support",
    description:
      "We focus on careful parcel handling and helpful support when customers need assistance.",
  },
];

const About = () => {
  return (
    <main className="px-5 py-12 sm:px-8 lg:px-12">
      <section className="rounded-3xl bg-[#063f45] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
          About ZapShift
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Making parcel delivery simpler for everyone
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
          ZapShift helps people and businesses send parcels across Bangladesh
          with convenient delivery options, shipment updates, and customer
          support.
        </p>
        <Link
          to="/coverage"
          className="mt-7 inline-flex rounded-full bg-lime-300 px-6 py-3 font-bold text-gray-950 transition hover:bg-lime-400"
        >
          Explore our coverage
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-[#063f45]">What we focus on</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {priorities.map((priority) => (
            <article
              key={priority.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#063f45]">
                {priority.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {priority.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
