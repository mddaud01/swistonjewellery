import Image from 'next/image'
import React from 'react'

const CategoryImage = ({image}) => {
  return (
    <div>
    <Image src={image} alt='this is category image'/>
  </div>
  )
}

export default CategoryImage