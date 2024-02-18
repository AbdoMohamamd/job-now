import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/Images/Logo.svg'
import BurgerMenu from '@/../public/Images/burger-menu.png'
import BurgerMenuSvg from '@/../public/Images/Group 59.svg'
const NavBar = () => {
  return (
    <nav className='flex  items-center justify-center p-10 bg-backgroundColor'>
     
        <Image src={Logo} width={120} height={120} alt={'Logo'}  />
        <button  className='absolute right-5'>
        <Image src={BurgerMenuSvg} width={50} height={50} alt='burger-menu' className='rounded-lg p-3 bg-primaryColor' />
      </button>
    </nav>
  )
}

export default NavBar
