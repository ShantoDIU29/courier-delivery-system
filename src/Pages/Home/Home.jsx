import bookingIcon from "../../assets/bookingIcon.png";
import Banner from "./Banner/Banner";

const howItWorksItems = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    active: true,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const Home = () => {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <Banner />

      <section className="mt-10 rounded-2xl bg-slate-100 px-5 py-10 sm:px-8 lg:px-12">
        <h2 className="mb-6 text-2xl font-bold text-[#033b43]">How it Works</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksItems.map((item) => (
            <article
              key={item.title}
              className={`min-h-44 rounded-2xl bg-white p-6 ${
                item.active
                  ? "border-2 border-sky-400"
                  : "border-2 border-transparent"
              }`}
            >
              <img
                src={bookingIcon}
                alt=""
                className="mb-4 h-10 w-10 object-contain"
              />
              <h3 className="mb-2 text-sm font-bold text-[#033b43]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
