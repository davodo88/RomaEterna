"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { classNames } from '../utils/utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faBars, faXmark, faLandmarkDome, faBook } from '@fortawesome/free-solid-svg-icons'


const Navigation = [
  { 'src': '/', 'title': 'home', 'icon': faLandmarkDome },
  { 'src': '/autor', 'title': 'autor', 'icon': faUserPen },
  { 'src': '/books', 'title': 'libros', 'icon': faBook },
]


const Navbar = () => {


  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }


  return (
    <>
      <button onClick={handleMenu}
        className={classNames('fixed font-Outfit font-bold top-6 right-6 text-3xl text-Piedra',)}>
        <span>
          <FontAwesomeIcon icon={menu ? faBars : faXmark} />
        </span>
      </button>
      <ul className={classNames('fixed flex min-w-min w-[50%] gap-4 justify-around  top-0  p-4 right-[10%] transition-all ', menu ? 'opacity-0' : 'top-4')}>
        {Navigation.map((navi, index) => {
          return (
            <li key={index} className='hover:scale-105  uppercase font-Outfit font-bold text-Piedra'>
              <Link href={navi.src}>
                <span className='flex items-center justify-center gap-x-2'>
                  <FontAwesomeIcon icon={navi.icon} />
                  {navi.title}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

    </>
  )
}

export default Navbar