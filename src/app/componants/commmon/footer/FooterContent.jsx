import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../../../public/assets/logo.png"
import media from "../../../../../public/assets/socialmedia.png"
import Contact from './Contact'
import FooterLinks from './FooterLInks'
import GoogleMap from './Googlemap'

const FooterContent = () => {
  return (
    <div className=' w-full bg-[#353530] py-[16px] mt-[155px] mr-[84px] mb-[72px] ml-[131px]  relative z-10'>
       <div className='flex px-[27px] justify-between'>
       <div>
            <div className='w-[140px] h-[133px]'>
                <Image src={logo} className='w-full h-full'/>
            </div>
            <ul className='mx-[40px] py-[30px] w-[428px] justify-between flex'>
                <li className='text-[18px] font-normal'>
                    <Link href="/" className='text-[#fff]'>Home</Link>
                </li>
                <li className='text-[18px] font-normal'>
                    <Link href='/'  className='text-[#fff]'>About Us</Link>
                </li>
                <li className='text-[18px] font-normal'>
                    <Link href="/"  className='text-[#fff]'> News </Link>
                </li>
                <li className='text-[18px] font-normal'>
                    <Link href="/"  className='text-[#fff]'>Gallery</Link>
                </li>
                <li className='text-[18px] font-normal'>
                    <Link href="/"  className='text-[#fff]'>Contact</Link>
                </li>
            </ul>
        </div>
        <div className='m-[30px]'>
            <Image src={media} className='w-full'  useMap='#media'/>
            <map name="media">
                <area shape='rect' coords='20 13 55 49' href='/'/>
                <area shape='rect' coords='70 13 105 49' href='/'/>
                <area shape='rect' coords='119 13 155 49' href='/'/>
            </map>
        </div>

        <div className='w-[675px] relative'>
        <div className='  absolute bottom-[0px]'>
            <GoogleMap/>
        </div>
        </div>
       </div>

       <Contact />
       <FooterLinks />
    </div>
  )
}

export default FooterContent