

import Image from 'next/image'
import React from 'react'

function Avatar({url}) {
  return (
    <Image
    loading='lazy'
    src={url}
    alt='profile picture'
    width={50}
    height={50}
    />
  )
}

export default Avatar;