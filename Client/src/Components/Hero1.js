import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper";

const Hero1 = () => {
  return (
    <div>
        {/* <div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={"/assets/game.jpg"} className="w-full" />
    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-7 right-7 top-1/2">
      <a href="#slide4" className="btn-circle h-[100px]">❮</a> 
      <a href="#slide2" className="btn-circle h-[100px]">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={"/assets/sakuna.jpg"} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn-circle h-[100px]">❮</a> 
      <a href="#slide3" className="btn-circle h-[100px]">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={"/assets/naruto.jpg"} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn-circle h-[100px]">❮</a> 
      <a href="#slide4" className="btn-circle h-[100px]">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={"/assets/cod.jpg"} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn-circle h-[100px]">❮</a> 
      <a href="#slide1" className="btn-circle h-[100px]">❯</a>
    </div>
  </div>
        </div> */}
        <NewSlider/>
    </div>
  )
}

export default Hero1

const NewSlider = () =>{
  return (
    <>
<div className=" text-black relative mb-10 bg-white ">
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      // breakpoints={{
      //   576: {
      //     slidesPerView: 4,
      //   },
      //   1008:{
      //     slidesPerView:6
      //   }
      // }}
    
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> 
        <img src={"/assets/game.jpg"} className="w-full h-48 sm:h-auto" />
      </SwiperSlide>
      <SwiperSlide> 
        <img src={"/assets/sakuna.jpg"} className="w-full h-48 sm:h-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={"/assets/naruto.jpg"} className="w-full h-48 sm:h-auto" />
      </SwiperSlide>
      {/* <SwiperSlide>
      <img src={"/assets/cod.jpg"} className="w-full" />
      </SwiperSlide> */}
      
    </Swiper>
    </div>
    </>
  )
}