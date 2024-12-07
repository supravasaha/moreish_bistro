import "./Header.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import Slide from "../Slide/Slide";
import heroSlider1 from "../../assets/hero-slider1.jpg"
import heroSlider2 from "../../assets/hero-slider2.jpg"
import heroSlider3 from "../../assets/hero-slider3.jpg"

const Header = () => {

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide img={heroSlider1} title={"Get Indulged into our MOREISH"} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."} btnText={"View Menu"}></Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide img={heroSlider2} title={"Get Indulged into our MOREISH"} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."} btnText={"View Menu"}></Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide img={heroSlider3} title={"Get Indulged into our MOREISH"} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."} btnText={"View Menu"}></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
