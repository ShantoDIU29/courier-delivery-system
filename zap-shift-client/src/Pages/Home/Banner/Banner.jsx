import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <Carousel autoPlay infiniteLoop>
        <div className="relative">
          <img src={bannerImg1} alt="Zap Shift delivery service" />
          <div className="absolute bottom-[18%] left-[7%] flex flex-wrap gap-3">
            <a
              href="#track-parcel"
              className="btn btn-sm rounded-full border-0 bg-lime-300 px-5 font-bold text-gray-950 shadow-none hover:bg-lime-400 sm:btn-md"
            >
              Track Your Parcel
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-lg text-lime-300">
                ↗
              </span>
            </a>
            <a
              href="#be-a-rider"
              className="btn btn-sm rounded-lg border border-gray-300 bg-white px-5 text-gray-900 shadow-none hover:bg-gray-50 sm:btn-md"
            >
              Be A Rider
            </a>
          </div>
        </div>
        <div>
          <img src={bannerImg2} alt="Fast and reliable delivery" />
        </div>
        <div>
          <img src={bannerImg3} alt="Zap Shift logistics solutions" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
