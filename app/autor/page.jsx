import React from 'react'
import Navbar from '../../components/navbar'
import Autor from '../../components/autor'
import Footer from '../../components/footer'

const Writer = () => {
  return (
    <div className='w-full h-full '>
      <Navbar />
      <h1 className='uppercase w-max h-20 m-auto my-16 text-3xl text-Gold'>
        - autor -
      </h1>
      <Autor />
    </div>
  )
}

export default Writer