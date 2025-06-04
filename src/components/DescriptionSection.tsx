import Image from 'next/image'
import React from 'react'
import good_describe from './good_describe.jpg'

export default function DescriptionSection() {
  return (
    <div className='description grid grid-cols-2  mx-8 px-2  items-center'>
     
        <div className="desccription-container-text col-span-2 sm:col-span-1 order-2 sm:order-1">
          <div  data-aos="fade-up">
                   <h5 className='text-xl sm:text-2xl font-medium text-gray-700 text-center sm:text-start'>Dans notre salon, chaque détail compte </h5>
            <p className='pt-4 pr-0 sm:pr-4 text-center sm:text-start text-base sm:text-lg text-gray-600'>Nous proposons des services complets pour homme : coupes, tailles de barbe, soins du visage et coiffage sur mesure. Pour un entretien ou un relooking, notre équipe vous accueille dans un cadre raffiné pour une expérience grooming haut de gamme</p>

          </div>
          
        </div>
           <div className="hidden sm:block desccription-container-image col-span-2 sm:col-span-1 w-full  h-[300px] sm:h-[400px] order-1 sm:order-2 pl-0 sm:pl-4">
            <img

            src='https://images.pexels.com/photos/31810248/pexels-photo-31810248/free-photo-of-outils-de-rasage-classiques-dans-un-salon-de-coiffure-moderne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='rounded-md'
            alt='description image'
            style={{width:'100%',height:'100%'}}
            />

        </div>
      
    </div>
  )
}
