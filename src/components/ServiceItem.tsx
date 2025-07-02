import React from 'react'

export default function ServiceItem() {
  return (
    <>
      <div className='grid grid-cols-2 h-[400px] pt-32 items-center mx-8 px-2  relative' id='taille-barbe'>
        <div className="image-container col-span-2 sm:col-span-1 px-4 sm:px-0">
          <img src='https://images.pexels.com/photos/897251/pexels-photo-897251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='rounded-md' style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="description-container pl-0 sm:pl-8  col-span-2 sm:col-span-1 text-center sm:text-start mt-12 sm:mt-0">
             <div data-aos="fade-up">
          <h3 className=" text-xl font-bold text-[#C4A35A] mb-2"> Taille de Barbe</h3>
          <p className='text-base sm:text-lg text-gray-600'>
               Restructuration complète ou simple entretien, nous sculptons votre barbe avec précision pour mettre en valeur votre visage. Finition aux ciseaux ou à la lame selon vos envies.
          </p>
          </div>
        
        </div>

      </div>
      <div className='grid grid-cols-2 h-[400px] pt-48 items-center mx-8 px-2 ' id='rassage-traditionnel'>

        <div className="description-container pr-0 sm:pr-8 col-span-2 sm:col-span-1 text-center sm:text-start order-2 sm:order-1 mt-12 sm:mt-0" >
          <div data-aos="fade-up">
          <h3 className='text-xl font-bold text-[#C4A35A] mb-2'>Rasage Traditionnel</h3>
            <p className='text-base sm:text-lg text-gray-600'>
          Profitez d’un moment de détente avec un rasage à l’ancienne, serviette chaude et mousse au blaireau incluses. Un soin authentique pour une peau douce et rafraîchie.
       </p>
       </div>
        </div>
        <div className="image-container col-span-2 sm:col-span-1 px-4 sm:px-0 order-1 sm:order-2 ">
          <img src='https://images.pexels.com/photos/995300/pexels-photo-995300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='rounded-md' style={{ width: '100%', height: '100%' }} />
        </div>

      </div>
      <div className='grid grid-cols-2 h-[400px] pt-64 items-center mx-8 px-2'>
        <div className="image-container px-4 sm:px-0 col-span-2 sm:col-span-1">
          <img src='https://images.pexels.com/photos/5282408/pexels-photo-5282408.jpeg' className='rounded-md' style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="description-container pl-0 sm:pl-8 col-span-2 sm:col-span-1 text-center sm:text-start mt-12 sm:mt-0">
          <div data-aos="fade-up">
          <h3 className='text-xl font-bold text-[#C4A35A] mb-2'> Coupe classique</h3>
            <p className='text-base sm:text-lg text-gray-600'>
          Une coupe soignée et personnalisée selon votre style et la forme de votre visage. Un service rapide, précis et toujours impeccable pour un look élégant au quotidien.
          </p>
          </div>
        </div>

      </div>
      <div className='grid grid-cols-2 pt-80 items-center mx-8 px-2 h-auto' id='degrade-blanc'>

        <div className="description-container pr-0 sm:pr-8 col-span-2 sm:col-span-1 order-2 sm:order-1 text-center sm:text-start mt-12 sm:mt-0">
          <div data-aos="fade-up">
            <h3 className='text-xl font-bold text-[#C4A35A] mb-2'>Dégradé à Blanc</h3>
             <p className='text-base sm:text-lg text-gray-600'>
            Un fondu précis et net, du crâne jusqu’au blanc, pour une allure moderne et maîtrisée. Idéal pour ceux qui recherchent une coupe tendance et parfaitement dessinée.
             </p>
          </div>
        </div>
        <div className="image-container px-4 sm:px-0 col-span-2 sm:col-span-1 order-1 sm:order-2 ">
          <img src='https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='rounded-md' style={{ width: '100%', height: '100%' }} />
        </div>


      </div>
      <div className="block h-[48px]"></div>
    </>
  )
}
