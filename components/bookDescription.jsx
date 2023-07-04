import Image from 'next/image'
import React from 'react'


import Front from '../public/images/RomaeternaPortada2.png'


const Bookdesription = () => {
  return (
    <div className='w-full h-full  bg-gray-300/50 flex flex-col-reverse md:flex-row justify-around p-10 items-center gap-y-12'>
      <div className='flex md:w-3/5 px-4 text-center md:text-left font-Outfit'>
        Roma, marzo del 44 a. e. c. / 710 ab Urbe Condita. Un grupo de senadores planifica el asesinato de Julio César, el general que ostenta el poder supremo tras su victoria en la guerra civil contra Pompeyo el Grande. Los conspiradores son descubiertos, y su plan acaba decapitado antes de empezar. Los pocos conjurados que sobreviven tratan de provocar una nueva guerra civil. Julio César y sus hombres marchan tras ellos, pero la meta de César es otra: emular a Alejandro Magno en sus conquistas de Oriente. El destino pone su sueño al alcance de sus manos, pero como siempre en su vida, César tendrá que sudar sangre y decidir hasta dónde está dispuesto a llegar para lograr su meta.
      </div>
      <div className='flex justify-center items-center md:w-1/3 h-full'>
        <Image src={Front} width={400} height={700}
          className='flex w-auto h-auto drop-shadow-md'
        />
      </div>
    </div>
  )
}

export default Bookdesription