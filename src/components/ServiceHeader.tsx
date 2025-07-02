import Image from 'next/image'
import React from 'react'
import serviceheader from '../../public/img/serviceHeader.png'

type pageTile={
  title:string
}

export default function ServiceHeader({title}:pageTile) {
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
         <h2 className='text-white text-5xl text-center block '>{title}</h2>

       </div>
       
      
    </div>
  )
}
