
import ServiceHeader from '@/components/ServiceHeader'
import React from 'react'

export default function Contactpage() {
  return (

    <div>
      <ServiceHeader title='Contact us' />

      <div className=''>
        <form action="#" method="POST" className="  mx-8   sm:mx-auto mt-16 max-w-xl sm:mt-20">
  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    
    <div className='col-span-2 sm:col-span-1'>
      <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
        First name
      </label>
      <div className="mt-2.5">
        <input
          type="text"
          name="first-name"
          placeholder="Name"
          id="first-name"
          autoComplete="given-name"
          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 outline-offset-0 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        />
      </div>
    </div>

    <div className='col-span-2 sm:col-span-1'>
      <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
        Email
      </label>
      <div className="mt-2.5">
        <input
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          
           placeholder="name@gmail.com"
          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 outline-offset-0 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        />
      </div>
    </div>
    <div className='col-span-2 '>
      <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
  Message
</label>
<div className="mt-2.5">
  <textarea
    name="message"
    id="message"
    rows={4}
    placeholder="Écris ton message ici..."
    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 outline-offset-0 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 resize-none"
  ></textarea>
</div>

    </div>
    <div className='pb-[148px] pt-12'>
     
            <button type="submit" className=" text-white bg-[#C4A35A]   sm:bg-[#111111] hover:bg-[#C4A35A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  flex justify-center  " disabled={true}>SEND</button>
           
    </div>

  </div>
</form>

      </div>
    </div>
  )
}
