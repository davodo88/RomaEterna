import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between items-center p-6 w-full h-max bg-Red font-NotoSans text-Gold'>
      <div className='flex flex-col gap-y-4 my-10'>
        <h1 className='uppercase font-NotoSans text-center'>
          ¿quieres contactar conmigo?
        </h1>
        <h3 className='text-center'>
          juliagarciajordi@gmail.com
        </h3>
      </div>
      <secction className='flex items-center  justify-center p-2 border-t-[1px] border-Gold w-full h-4 '>
        <Link href={`https://dsrodenas.com/`}>
          <h1 className='font-Outfit text-xs  flex justify-center items-center  h-4 mt-4'>
            www.dsrodenas.com ©2023
          </h1>
        </Link>
      </secction>
    </div>
  )
}

export default Footer