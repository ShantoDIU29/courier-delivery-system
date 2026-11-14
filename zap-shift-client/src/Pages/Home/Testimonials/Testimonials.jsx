import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import customerTop from "../../../assets/customer-top.png";
import reviewQuote from "../../../assets/reviewQuote.png";

const testimonials = [
  {
    quote:
      "A posture corrector works by providing support and gentle alignment for your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossin",
    role: "Senior Product Designer",
  },
  {
    quote:
      "The team made our delivery process feel simple and dependable. We can focus on our customers while every parcel stays on track.",
    name: "Rasel Ahmed",
    role: "CTO",
  },
  {
    quote:
      "Fast updates and thoughtful support have made a real difference to our operations. Our customers always know where their orders are.",
    name: "Nasir Uddin",
    role: "CEO",
  },
  {
    quote:
      "Our daily shipments are easier to manage now. The service is consistent, responsive, and built around the way our business works.",
    name: "Awlad Hossin",
    role: "Senior Product Designer",
  },
  {
    quote:
      "Reliable delivery gives our team more time to build the business. Every update is clear, and every handoff feels well managed.",
    name: "Mim Akter",
    role: "Operations Lead",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-10 overflow-hidden rounded-2xl bg-slate-100 px-4 py-10 text-center sm:px-8 sm:py-12 lg:px-12">
      <img
        src={customerTop}
        alt=""
        className="mx-auto h-16 w-auto object-contain"
      />
      <h2 className="mt-4 text-2xl font-bold text-[#063f45] sm:text-3xl">
        What our customers are saying
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <div className="relative mx-auto mt-8 max-w-6xl px-5 sm:px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          pagination={{ clickable: true }}
          loop
          centeredSlides
          slidesPerView={1.08}
          spaceBetween={14}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 18 },
            1024: { slidesPerView: 3.2, spaceBetween: 22 },
          }}
          className="!overflow-visible pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={`${testimonial.name}-${testimonial.role}-${index}`}
            >
              <article className="flex min-h-64 flex-col rounded-2xl bg-white px-5 py-5 text-left shadow-sm sm:px-6">
                <img
                  src={reviewQuote}
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                <p className="mt-3 flex-1 text-xs leading-5 text-gray-600">
                  {testimonial.quote}
                </p>
                <div className="mt-5 border-t border-dashed border-[#0a5960]/40 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-full bg-[#b9ced0]" />
                    <div>
                      <h3 className="text-xs font-bold text-[#063f45]">
                        {testimonial.name}
                      </h3>
                      <p className="text-[10px] text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous testimonial"
          className="testimonial-prev absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-[#063f45] shadow-sm transition hover:bg-lime-300"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          className="testimonial-next absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-lime-300 text-lg text-[#063f45] shadow-sm transition hover:bg-lime-400"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
