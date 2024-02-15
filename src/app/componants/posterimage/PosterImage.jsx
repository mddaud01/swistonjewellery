import Image from 'next/image'
import React from 'react'
import womenImage from '../../../../public/assets/women.png'
import neckless1 from '../../../../public/assets/Rectangle1.png'
import neckless2 from '../../../../public/assets/Rectangle2.png'

const PosterImage = () => {
  return (
    <div className='bg-[#030303]'>
    <div className='w-[1325px] mx-auto'>
      <div className='  grid grid-rows-6 grid-flow-col  gap-[30px] pt-[63px] pb-[113px]'>
        <div className='row-span-6'>
          <div className='w-[auto] h-[773px] bg-cover'  style={{backgroundImage:`url('/assets/women.png')`}}></div>
        </div>
        <div className=' row-span-6  '>
         <div className='grid  grid-rows-12 gap-[30px]'>
         <div className=' row-span-12  '>
            <div  className='h-[375px] w-[auto] bg-cover relative'  style={{backgroundImage:`url('/assets/Rectangle1.png')`}}>
                <h1 className='font-[700] text-[33px] leading-[36.3px] text-[#FFFFFF] w-[404px] left-[22px] bottom-[15px] absolute'>"Sparkle & Shine: Discover Your Signature Style"</h1>
            </div>
          </div>
          <div className='row-span-12 '>
            <div  className='h-[375px] w-[auto] bg-cover relative' style={{backgroundImage:`url('/assets/Rectangle2.png')`}} >
            <h1 className='font-[700] text-[33px] leading-[36.3px] text-[#FFFFFF] w-[404px] left-[22px] bottom-[15px] absolute'>"Sparkle & Shine: Discover Your Signature Style"</h1>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default PosterImage