import bookingIcon from "../../assets/bookingIcon.png";
import serviceIcon from "../../assets/service.png";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Faq from "./Faq/Faq";
import Features from "./Features/Features";
import MerchantCta from "./MerchantCta/MerchantCta";
import Reviews from "./Reviews/Reviews";
import Testimonials from "./Testimonials/Testimonials";

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

const serviceItems = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    active: true,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Home = () => {
  return (
    <>
      <Reviews />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Banner />

        <section className="mt-10 rounded-2xl bg-slate-100 px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="mb-6 text-2xl font-bold text-[#033b43]">
            How it Works
          </h2>
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

        <section className="mt-10 rounded-2xl bg-[#063f45] px-5 py-12 text-center sm:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="mt-6 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item) => (
              <article
                key={item.title}
                className={`flex min-h-56 flex-col items-center rounded-2xl p-6 transition-colors ${
                  item.active
                    ? "border-2 border-sky-400 bg-lime-300"
                    : "bg-white"
                }`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-50">
                  <img
                    src={serviceIcon}
                    alt=""
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <h3 className="max-w-xs text-base font-bold text-[#063f45]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-5 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <Brands />
        <Features />
        <MerchantCta />
        <Testimonials />
        <Faq />
      </div>
    </>
  );
};

export default Home;
