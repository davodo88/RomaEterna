import React from 'react'
import Navbar from '../components/navbar'
import Title from '../components/title'
import Book from '../components/bookDescription'
import Coments from '../components/coments'


export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between gap-8'>
      <Navbar />
      <Title />
      <Book />
      <Coments />
    </div>
  )
}
