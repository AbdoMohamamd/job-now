import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className='bg-primaryBg'>
      <HeroSection />
    </main>
  )
}
