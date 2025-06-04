import React from 'react'

export default function ImageSection() {
  return (
    <div className='relative'>
        <div  className=' bg-black' style={{width:'100%', height:'500px'}}>
   <img  className='w-full h-full object-cover' src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{opacity:0.4}} />
   
        </div>
   
   <div className="text-center absolute top-0  w-full sm:w-auto mx-0 sm:mx-8 px-4  " style={{left:'50%',top:'50%', transform:'translate(-50%,-50%)'}}>
      <h4 className='text-white text-3xl sm:text-4xl font-semibold z-10 text-center'>Bien plus qu’une coupe <br></br> de cheveux</h4>
      <p className='text-center text-white pt-6 text-base sm:text-lg'>Notre salon est dédié aux hommes soucieux de leur style. Avec des prestations sur mesure et une attention particulière aux détails, chaque passage devient un moment de détente et de précision</p>
         <div className=' flex items-center justify-center pt-9'>
          
            <button type="submit" className=" text-white bg-[#C4A35A]   sm:bg-black hover:bg-[#C4A35A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  flex justify-center  ">CANTACT US</button>
           
          </div>    
         
           
   </div>
 
    </div>
    
  )
}
