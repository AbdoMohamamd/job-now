import React from 'react'
import SearchIcon from '@/../public/Images/search-icon.png'
import Image from 'next/image'
const Input = ({ placeholder, icon, iconAlt, type }) => {
  return (
    <div className='flex items-center bg-backgroundColor rounded-lg p-1  '>
      <Image className='m-1' src={icon} width={13} height={13} alt={iconAlt} />
      <input
        type={type}
        placeholder={placeholder}
        className='placeholder-black bg-backgroundColor text-xs flex-1 focus:outline-none font-semibold '
      />
    </div>
  )
}

export default Input
