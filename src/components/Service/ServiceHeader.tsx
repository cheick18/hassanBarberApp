import Image from 'next/image'
import React from 'react'
import serviceheader from '@/components/serviceHeader.png'

export default function ServiceHeader() {
  return (
    <div className="service-header position relative   bg-black h-[450px] ">
        <div className='h-[400px]  pl-[228px] '>
             <Image 
        src={serviceheader}
        alt="service-header"
        style={{height:'100%'}}
        />

        </div>
       <div className='absolute top-[50%] left-[50%] ' style={{transform:'translate(-50%,-50%)'}}>
         <h2 className='text-white text-5xl text-center block '>Services</h2>

       </div>
       
      
    </div>
  )
}
