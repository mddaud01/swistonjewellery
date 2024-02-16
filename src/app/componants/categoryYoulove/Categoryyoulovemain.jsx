import Image from 'next/image'
import React from 'react'
import Ring from '../../../../public/assets/anklets1.png'
import Earrings from '../../../../public/assets/earrings.png'
import Neckless from '../../../../public/assets/nacklacess.png'
import Bracelats from '../../../../public/assets/bracelete.png'
import Armlets from '../../../../public/assets/armlets.png'
import Anklets from '../../../../public/assets/anklets.png'
import CategoryImage from './CategoryImage'

const Categoryyoulovemain = () => {
  return (
    <div  className='container-xl mx-auto text-[#CBB477]'>
        <h1 className=' font-[500]  leading-[33px] text-[30px]  text-center pt-[85px]'>
        Choose Category you love
        </h1>
      <div  className='flex  items-center pt-[53px] pb-[92px] gap-[60px] justify-center'>
      <div>
        <CategoryImage image={Anklets}/>
        </div>
        <div>
        <CategoryImage image={Earrings}/>
        </div>
        <div>
        <CategoryImage image={Neckless}/>
        </div>
        <div>
        <CategoryImage image={Bracelats}/>
        </div>
        <div>
        <CategoryImage image={Anklets}/>
        </div>
        
      </div>
      
    </div>
  )
}

export default Categoryyoulovemain