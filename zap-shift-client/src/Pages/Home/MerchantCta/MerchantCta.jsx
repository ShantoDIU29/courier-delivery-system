import merchantBackground from "../../../assets/be-a-merchant-bg.png";

const MerchantCta = () => {
  return (
    <section className="relative mt-10 overflow-hidden rounded-3xl bg-[#063f45] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14">
      <img
        src={merchantBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full opacity-90"
      />

      <div className="relative z-10 max-w-xl">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          Merchant and Customer Satisfaction
          <br className="hidden sm:block" /> is Our First Priority
        </h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#merchant"
            className="btn rounded-full border-0 bg-lime-300 px-6 font-bold text-gray-950 shadow-none hover:bg-lime-400"
          >
            Become a Merchant
          </a>
          <a
            href="#courier"
            className="btn rounded-full border border-lime-300 bg-transparent px-6 font-bold text-lime-300 shadow-none hover:bg-lime-300 hover:text-gray-950"
          >
            Earn with ZapShift Courier
          </a>
        </div>
      </div>
    </section>
  );
};

export default MerchantCta;
