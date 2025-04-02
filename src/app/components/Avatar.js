

import Image from 'next/image'
import React from 'react'

function Avatar({url}) {
  return (
    <Image
    className='rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
    loading='lazy'
    src={url}
    alt='profile picture'
    width={50}
    height={50}
    />
  )
}

export default Avatar;