import React from 'react'
import HeroImg from '@/../public/Images/hero-image.png'
import Image from 'next/image'
import Input from '../Input/Input'
import DropDown from '../DropDown/DropDown'
import SearchIcon from '@/../public/Images/search-icon.png'

const HeroSection = () => {
  const locations = ['location1', 'location2', 'location3']
  return (
    <div className='text-center flex flex-col items-center container mx-auto '>
      <h1 className='text-3xl font-bold mx-auto my-6'>Search, Find, & Apply</h1>
      <p className='w-8/12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='flex justify-center  bg-white flex-wrap rounded-xl py-5 px-2 my-12 gap-2 '>
        <Input
          placeholder={'Job title or keyword'}
          icon={SearchIcon}
          iconAlt={'SearchIcon'}
          type={'text'}
        />
        <DropDown options={locations} placeholder={'Location'} />
        <button className='bg-primaryColor text-white w-max font-semibold py-1 px-4 rounded-lg text-xs'>
          Search
        </button>
      </div>
      <Image src={HeroImg} className={'w-full'} />
    </div>
  )
}

export default HeroSection
