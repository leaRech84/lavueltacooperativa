/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import image_1 from '../assets/images/castenetto1.jpg';
import image_2 from '../assets/images/castenetto2.jpg';

import image_3 from '../assets/images/castenetto3.jpg';



export const Slider2 = () => {
    const slides = [
        {
          image: image_1
        },
        {
          image: image_2
        },
        
        {
          image: image_3
        },
      ]
    
  return (
    
    <Swiper className="max-w-[600px] h-[700px] w-full m-auto py-16 px-4 relative group"
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