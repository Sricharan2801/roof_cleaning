import React from 'react'
import icon from "../assets/logo.png"
import { navItems } from '../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='w-full h-16 mx-auto  flex  items-center fixed 
   z-50 ' style={{
        backgroundColor: '#c3cbdc',
        backgroundImage: 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)',

      }}>

      <div className='flex items-center sm:gap-5 gap-5 w-1/2 '>
        <img src={icon} alt="icon" className='w-20 h-20 sm:ml-10 ml-5' />
        <a href='#home' className='sm:text-2xl text-sm font-mono font-bold cursor-pointer'>LOREM ROOFING</a>

      </div>

      <nav className='w-1/2 hidden lg:flex justify-center items-center gap-14 h-20 text-[1.2rem] text-gray-600 font-semibold '>

        {
          navItems.map((item, index) => (
            <a key={index} href={item.path} className='hover:font-bold'>{item.name}</a>
          ))
        }

      </nav>

      <div className='w-1/2 flex justify-end items-center lg:hidden'>
        <FontAwesomeIcon  icon={showMenu? faX : faBars} color={showMenu ? 'red' : 'gray'} className='text-3xl lg:hidden cursor-pointer pr-5' 
        onClick={() => setShowMenu(!showMenu)}/>
      </div>

      {
        showMenu ? <div className='absolute  top-20 right-0 w-1/2  bg-white z-50'>
          <nav className='flex flex-col gap-10 text-lg p-10 font-semibold '>

            {navItems.map((item, index) => (
              <a key={index} href={item.path} className='hover:font-bold'>{item.name}</a>
            ))}
          </nav>
        </div> : <></>
      }


    </header>
  )
}

export default NavBar
