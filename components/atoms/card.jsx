import React from 'react'

const Card = ({ person, who, coment }) => {
  return (
    <div className='flex flex-col gap-y-6 bg-stone-300 p-8 md:p-6 rounded drop-shadow'>
      <h1 className='flex font-NotoSans text-center text-stone-700'>
        {coment}
      </h1>
      <div className='flex flex-col gap-y-1'>
        <h1 className='font-bold text-xl font-Outfit text-stone-950'>{person}</h1>
        <h3 className=' text-stone-500'>{who}</h3>
      </div>
    </div>
  )
}

export default Card