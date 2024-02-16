import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/Images/Logo.png'
import BurgerMenu from '@/../public/Images/burger-menu.png'
const NavBar = () => {
  return (
    <nav className='flex  items-center justify-center p-10 bg-backgroundColor'>
     
        <Image src={Logo} width={120} height={120} alt={'Logo'}  />
        <button  className='absolute right-5'>
        <Image src={BurgerMenu} width={35} height={35} alt='burger-menu' />
      </button>
    </nav>
  )
}

export default NavBar
