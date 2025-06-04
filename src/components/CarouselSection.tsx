'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

export default function CarouselSection() {

const items=[
  {
    img:'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg',
    text:'Taille de Barbe',
    link:''
  },
   {
    img:'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=600',
    text:'Rasage Traditionnel',
    link:''
  },
   {
    img:'https://images.pexels.com/photos/995300/pexels-photo-995300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   text:'Taille de Barbe',
    link:''
  },
   {
    img:'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg',
    text:'Taille de Barbe',
    link:''
  },
   {
    img:'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=600',
    text:'Rasage Traditionnel',
    link:''
  },
   {
    img:'https://images.pexels.com/photos/995300/pexels-photo-995300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Taille de Barbe',
    link:''
  }
]
  return (
    <div className="block h-400px mx-8 px-2  mt-[108px]">
      <h4 className='text-xl sm:text-2xl font-medium text-gray-700 text-center'>Votre look, notre savoir-faire</h4>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='mt-8'
        autoplay={true}
        pagination={{ clickable: true }} 
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1, 
          },
          640: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}

      >
        {items.map((src, index) => (
         <SwiperSlide key={index} className="relative">
  <div className="relative group card-container overflow-hidden">
    <img
      src={src.img}
      alt={`Slide ${index + 1}`}
      className="shadow-md w-full h-auto"
      style={{ opacity: 1 }}
    />

    <div
        className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 py-4 rounded-t-lg 
                 opacity-100 md:opacity-0 md:group-hover:opacity-100 
                 transition-opacity duration-300 ease-in-out"
    >
      <span className="text-md sm:text-lg text-white pl-4">
        {src.text}
      </span>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
