'use client';

import CarouselSection from "@/components/CarouselSection";
import DescriptionSection from "@/components/DescriptionSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import SpaceSection from "@/components/SpaceSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
    useEffect(()=>{
      AOS.init()

  },[])
  
  return (
    
    <div className="font-[family-name:var(--font-geist-sans)] relative">

       <HeroSection /> 
     
          <CarouselSection />  
            <SpaceSection /> 
    <DescriptionSection />
   <SpaceSection /> 
  
   <GallerySection />
   <SpaceSection />
   <ImageSection />
       
      
  
    </div>


    
  );
}
