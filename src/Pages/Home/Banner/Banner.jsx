import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel showArrows>
      <div>
        <img src={bannerImg1} alt="Zap Shift delivery service" />
      </div>
      <div>
        <img src={bannerImg2} alt="Fast and reliable delivery" />
      </div>
      <div>
        <img src={bannerImg3} alt="Zap Shift logistics solutions" />
      </div>
    </Carousel>
  );
};

export default Banner;
