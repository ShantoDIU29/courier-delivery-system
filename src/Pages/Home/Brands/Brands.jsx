import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";

const brands = [
  { name: "Casio", image: casio },
  { name: "Amazon", image: amazon },
  { name: "Moonstar", image: moonstar },
  { name: "Star Plus", image: star },
  { name: "Start People", image: startPeople },
  { name: "Randstad", image: randstad },
];

const sliderBrands = [...brands, ...brands];

const Brands = () => {
  return (
    <section className="mt-10 border-b border-dashed border-[#0a5960] bg-slate-100 px-5 py-10 text-center sm:px-8 lg:px-12">
      <h2 className="text-xl font-bold text-[#063f45] sm:text-2xl">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        speed={700}
        allowTouchMove
        slidesPerView={2}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 32 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 6, spaceBetween: 44 },
        }}
        className="mt-7 w-full"
      >
        {sliderBrands.map((brand, index) => (
          <SwiperSlide
            key={`${brand.name}-${index}`}
            className="flex h-12 items-center justify-center"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="max-h-8 max-w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;
