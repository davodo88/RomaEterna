"use client"

import Link from 'next/link'
import React, { useState } from 'react'



const Navigation = [
  { 'src': '/', 'title': 'home' },
  { 'src': '/autor', 'title': 'autor' },
  { 'src': '/books', 'title': 'libros' },
]


const Navbar = () => {


  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }


  return (
    <>
      <button onClick={handleMenu}
        className='fixed font-Outfit font-bold top-5 right-4 text-3xl'>
        X
      </button>
      {menu && (
        <ul className='flex fixed top-5 z-50 right-20 gap-x-4'>
          {Navigation.map((navi, index) => {
            return (
              <li key={index} className='hover:scale-105  uppercase font-Outfit font-bold'>
                <Link href={navi.src}>
                  <span>{navi.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default Navbar