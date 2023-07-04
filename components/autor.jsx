import Image from 'next/image'
import React from 'react'


import Jordi from '../public/images/fotoJordiJG.jpg'



const Autor = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-max 
    gap-y-6 px-8 py-20 bg-Gold'>
      <div className='flex md:w-2/6 h-full px-8'>
        <Image src={Jordi} width={400} height={600} alt='imageAutor'
          className='object-contain flex w-auto h-auto  rounded drop-shadow-lg' />
      </div>
      <div className='flex justify-center items-center leading-relaxed md:w-3/5 px-10 font-Outfit whitespace-break-spaces text-justify text-stone-800 tracking-wide antialiased'
      >
        Jordi Julià García (1985). La Vall d'Uixó. Reside en su pueblo natal con su mujer, su hijo y sus perros. Ha sido profesor asociado del Departamento de Lengua y Culturas Europeas de la Universitat Jaume I, teniente de alcalde de su localidad y capitán de su equipo de rugby. Desde hace unos años trabaja como profesor de enseñanza secundaria, acercando la Edad Antigua a sus alumnos a través del Aprendizaje Basado en Proyectos. Actualmente trabaja en la segunda parte de Roma Eterna y en una precuela.
      </div>
    </div>
  )
}

export default Autor