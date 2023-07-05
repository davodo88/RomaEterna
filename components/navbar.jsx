"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { classNames } from '../utils/utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faBars, faXmark, faLandmarkDome, faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Navigation = [
  { 'src': '/', 'title': 'home', 'icon': faLandmarkDome },
  { 'src': '/autor', 'title': 'autor', 'icon': faUserPen },
  { 'src': '/books', 'title': 'libros', 'icon': faBook },
  { 'src': 'https://www.amazon.es/ROMA-ETERNA-I-%C2%A1Ave-C%C3%A9sar/dp/B0C1J2GQYT', 'title': 'Tienda', 'icon': faCartShopping },
]


const Navbar = () => {


  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }


  return (
    <div className='
    '>
      <button onClick={handleMenu}
        className={classNames('fixed font-Outfit font-bold top-4 right-6 text-3xl text-Black',)}>
        <span>
          <FontAwesomeIcon icon={menu ? faBars : faXmark} />
        </span>
      </button>
      <div>
        <ul className={classNames('fixed flex min-w-min w-[60%] mx-auto md:w-[50%] gap-4 justify-around  top-0  px-4 py-2 z-10  left-24 md:right-[10%] transition-all ', menu ? 'opacity-0' : 'top-4 bg-black rounded')}>
          {Navigation.map((navi, index) => {
            return (
              <li key={index} className='hover:scale-105  uppercase font-Outfit font-bold text-Piedra'>
                <Link href={navi.src}>
                  <span className='flex items-center justify-center gap-x-2'>
                    <FontAwesomeIcon icon={navi.icon} />
                    <span className='hidden md:flex'>{navi.title}</span>
                  </span>
                </Link>
              </li>
            )
          })}
          {/* <li><FontAwesomeIcon icon={ } /></li> */}
        </ul>
      </div>

    </div>
  )
}

export default Navbar