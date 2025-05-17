import React from 'react'

function FourGrid({image1, image2, image3, image4}) {
  return (
    <div className='grid grid-cols-2 gap-2 md:gap-8 mt-2 md:mt-6'>
        <img src={image1} alt="" className='rounded-xl'/>
        <img src={image2} alt="" className='rounded-xl'/>
        <img src={image3} alt="" className='rounded-xl'/>
        <img src={image4} alt="" className='rounded-xl'/>
    </div>
  )
}

export default FourGrid