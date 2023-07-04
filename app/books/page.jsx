import React from 'react'
import Navbar from '../../components/navbar'
import Image from 'next/image'

import Front from '../../public/images/RomaeternaPortada2.png'





const page = () => {
  return (
    <div className='w-full h-full flex flex-col justify-around items-center gap-10 bg-red-600'>
      <h1 className='uppercase w-max m-auto my-16 text-3xl text-Gold'>- libros -</h1>
      <Navbar />
      <div className=' font-NotoSans p-10 flex flex-col  justify-evenly gap-y-16 bg-Gold'>
        <section className='flex flex-col-reverse gap-8 md:flex-row justify-around items-center px-8'>
          <h1 className='flex justify-center items-center md:w-3/5 px-4 text-center md:text-left font-Outfit text-xl'>
            Roma, marzo del 44 a. e. c. / 710 ab Urbe Condita. Un grupo de senadores planifica el asesinato de Julio César, el general que ostenta el poder supremo tras su victoria en la guerra civil contra Pompeyo el Grande. Los conspiradores son descubiertos, y su plan acaba decapitado antes de empezar. Los pocos conjurados que sobreviven tratan de provocar una nueva guerra civil. Julio César y sus hombres marchan tras ellos, pero la meta de César es otra: emular a Alejandro Magno en sus conquistas de Oriente. El destino pone su sueño al alcance de sus manos, pero como siempre en su vida, César tendrá que sudar sangre y decidir hasta dónde está dispuesto a llegar para lograr su meta..
          </h1>
          <div className='flex justify-center items-center md:w-1/3 h-full'>
            <Image src={Front} width={400} height={700}
              className='flex w-auto h-auto drop-shadow-md'
            />
          </div>
        </section>
        <h3 className='text-justify'>
          <span className='font-bold font-Outfit underline text-Red text-xl'>SINOPSIS:</span>
          {` `}
          En el 48 a. e. c. tras vencer en la batalla de Farsalia contra los fieles a Pompeyo, Julio César salva la vida a Quinto Tulio Cicerón, hermano del célebre escritor y político Marco Tulio Cicerón, enemigo íntimo de César durante años. Dos años después se teje una conjura para acabar con la vida del cónsul perpetuo. Tras enterarse de los planes de los autodenominados liberatores, Quinto pide a su hermano Marco que no participe. Cicerón avisa a César de los planes para matarle, y el dictador arrasa con casi todos sus enemigos la noche previa a los idus de marzo.

          Unos pocos escapan, pero los hombres de Julio César y el dictador mismo los perseguirán por todo el territorio romano y fuera de él. Roma, Hispania, Egipto y Grecia, donde una misteriosa mujer, Roxana, a las órdenes del carismático líder militar griego Konstantinos, se cruzará en el camino de Julio César alimentando su sueño pendiente, conquistar Oriente y emular a Alejandro Magno. Mientras César avanza hacia su meta pendiente, las pasiones y las traiciones siguen golpeándolo como durante toda su vida. Aliados inesperados y enemigos declarados cruzan su acero con el destino de la Ciudad Eterna en juego. Grandes batallas y magníficos combates individuales se suceden en una Roma donde los conspiradores continúan agitando el avispero y en territorios a lo largo del territorio romano y más allá de él.
          Cerca de César los grandes hombres y mujeres de su tiempo y los mejores soldados de Roma se debaten entre el deber y sus convicciones. Sigue los pasos de la mítica XIII Legión y de la IX Legión Hispana hacia Oriente y vibra con Cicerón, Bruto, Cleopatra, Marco Antonio, Báculo, Servilia, Aulo Hircio, Herodes, Lucio Voreno, Tito Pullo, Orodes II y muchos más personajes históricos que protagonizan junto a memorables personajes ficticios, como Roxana o Konstantinos, la aventura que se quedó en el tintero del romano más grande de todos los tiempos: Julio César.
        </h3>
      </div>
    </div>
  )
}

export default page