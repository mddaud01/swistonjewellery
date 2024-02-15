import React from 'react'
import FooterContent from './FooterContent'
import GoogleMap from './Googlemap'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' w-full bg-cover bg-[#030303] flex justify-between relative' style={{backgroundImage:`url('/assets/bgfooter.png')`}}>
            <FooterContent/>
        <div className='h-[150px] bg-[#000] w-full bottom-0 z-[1] absolute text-[#5D5D5D]'>
           <div className=' pt-[100px] flex justify-between  mr-[84px]  ml-[131px]  '>
           <div>
           Copyright © <span className=' underline'><a href='www.abaris.com'> 2024Abaris Softech Pvt Ltd</a></span>  .All rights reserved.
            </div>
            <div>
            Terms of use Privacy Environmental Policy 
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer