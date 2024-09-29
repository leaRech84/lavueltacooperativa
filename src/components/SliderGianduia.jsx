/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import image_1 from '../assets/images/g1.jpg';
import image_2 from '../assets/images/g2.jpg';
import image_3 from '../assets/images/g3.jpg';
import image_4 from '../assets/images/g4.jpg';
import image_5 from '../assets/images/g5.jpg';
import image_6 from '../assets/images/g6.jpg';
import image_7 from '../assets/images/g7.jpg';
import image_8 from '../assets/images/g8.jpg';
import image_9 from '../assets/images/g9.jpg';
import image_10 from '../assets/images/g10.jpg';
import image_11 from '../assets/images/g11.jpg';


export const SliderGianduia = () => {
    const slides = [
        {
          image: image_1
        },
        {
          image: image_2
        },
        {
          image: image_5
        },
        {
          image: image_3
        },
        {
          image: image_4
        },
        {
          image : image_5
        },
        {
          image : image_6
        },
        {
          image : image_7
        },
        {
          image : image_8
        },
        {
          image : image_9
        },
        {
          image : image_10
        },
        {
          image : image_11
        }
      ]
    
  return (
    
    <Swiper className="max-w-[900px] h-[580px] w-full m-auto py-16 px-4 relative group"
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay= {{delay: 2500}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img className="cursor-pointer w-full h-full rounded-2xl bg-center bg-cover duration-500" src={slide.image} alt={slide.title}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )

}