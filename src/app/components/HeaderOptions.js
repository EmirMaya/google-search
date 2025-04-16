import Link from 'next/link'
import React from 'react'

const HeaderOptions = () => {
  return (
    <div className='text-gray-500'>
         {/* Left */}

        {/* Right */}
        <div className='flex space-x-3'>
            <Link className='link' href={'/'}>
                Settings
            </Link>
            <Link className='link' href={'/'}>
                Tools
            </Link>
        </div>
    </div>
  )
}

export default HeaderOptions