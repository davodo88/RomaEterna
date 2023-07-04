import React from 'react'


import Moneda from '../public/images/monedaRoma.png'
import Image from 'next/image'




const Title = () => {
  return (
    <div className='w-full bg-Red h-max py-20
      flex flex-col justify-center items-center gap-y-4'>
      <h3 className='flex justify-center items-center px-4 text-center font-Outfit text-xl text-Gold'>
        ¿Y si Julio César no hubiese sido asesinado?
      </h3>
      <h1 className='flex justify-center items-center text-center uppercase font-NotoSans font-bold text-6xl text-Gold'>
        roma eterna I
      </h1>
      <span className='w-20 h-20'>
        <Image src={Moneda} />
      </span>
      <h2 className='flex justify-center items-center uppercase font-NotoSans font-bold text-Gold'>¡Ave César!
      </h2>
    </div>
  )
}

export default Title