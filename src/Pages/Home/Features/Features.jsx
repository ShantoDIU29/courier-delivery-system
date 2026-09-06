import liveTrackingImage from "../../../assets/live-tracking.png";
import safeDeliveryImage from "../../../assets/safe-delivery.png";

const featureItems = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    image: liveTrackingImage,
    alt: "Live parcel tracking illustration",
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safeDeliveryImage,
    alt: "Safe delivery illustration",
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: safeDeliveryImage,
    alt: "Customer support delivery illustration",
  },
];

const Features = () => {
  return (
    <section className="mt-10 space-y-4 border-y border-dashed border-[#0a5960] bg-slate-100 py-6">
      {featureItems.map((item) => (
        <article
          key={item.title}
          className="flex min-h-44 flex-col items-center gap-6 rounded-2xl bg-white px-6 py-6 sm:flex-row sm:px-8 lg:px-10"
        >
          <div className="flex w-full shrink-0 justify-center sm:w-36">
            <img
              src={item.image}
              alt={item.alt}
              className="h-36 w-36 object-contain"
            />
          </div>
          <div className="hidden h-24 border-l border-dashed border-[#0a5960] sm:block" />
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-[#063f45]">{item.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Features;
