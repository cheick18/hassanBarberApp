import Image from 'next/image'
import React from 'react'
import Header1 from '../../public/img/header1.jpg'
import Header2 from '../../public/img/Header2.jpg'
import { IoMail } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import Link from 'next/link';
export default function HeroSection() {
  return (
    <div className='w-full'>
 <div className=' bg-[#111111]'>
        <div className='relative grid grid-cols-12 pt-20 justify-between py-4 mx-0 sm:mx-8 px-4'>
        <div className="  header-image-container col-span-12 sm:col-span-6  h-auto">
              <div className='grid grid-cols-2  gap-4'>
                <div className=''>
                    <Image 
                    src={Header1 }
                    alt='my header image'
                   
                  
                     />
                </div>
                  <div className=''>
                      <Image 
                    src={Header2 }
                    alt='my header image'
                   
                  
                     />
                  </div>
            </div>
        </div>
          <div className="header-text-container col-span-12 sm:col-span-6 pl-10  h-auto">
            <div className='text-white'>
                 <h1 className='text-4xl sm:text-5xl font-bold tracking-tight text-end sm:text-end'>We offer the <br></br>best shave</h1>
            <p className='pt-8 text-base sm:text-lg leading-relaxed'>Give your beard the attention it deserves. Precise cuts, a refined style, and a unique experience every time.</p>
          <Link href='contact'>
           <button type="submit" className=" mt-9 text-white bg-[#C4A35A]  border border-[#C4A35A] sm:bg-black hover:bg-[#C4A35A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center  sm:float-end">CANTACT US</button>
           
           </Link>
            </div>
           
          </div>
          
      </div>
      </div>
      
    <div className=' flex flex-col md:flex-row justify-center items-center pt-12 sm:pt-0 md:justify-end gap-8 sm:gap-4 relative px-16 '>
       <div className='col-span-2 relative top-0 shadow-md bg-white sm:bg-slate-50 w-[220px]  h-[160px] text-center  z-10 sm:top-[-40px] p-4'>
      
    <div className='flex items-center justify-center w-full'>
        <IoMail size={50} className='text-gray-500'/>

    </div>

      
            <p className='text-base pt-3 text-gray-600'>hassanbarber@gmail.com</p>

       </div>
       <div className='col-span-2 w-[220px] top-0 shadow-md bg-white sm:bg-slate-50  text-center h-[160px] relative z-10 sm:top-[-40px]  p-4'>
             <div className='flex items-center justify-center w-full'>
            <FaSquarePhone   size={50} className='text-gray-500' />
            </div>
          <p className='text-base pt-3 text-gray-600'>+212 07 71 67 60 13</p>
        
       </div>

    </div>
    


    </div>
  )
}
