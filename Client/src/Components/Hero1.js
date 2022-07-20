import React from 'react'

const Hero1 = () => {
  return (
    <div>
        <div className="carousel">
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
</div>
    </div>
  )
}

export default Hero1