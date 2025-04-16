import Link from 'next/link';
import React from 'react';
import HeaderOption from './HeaderOption';

const HeaderOptions = () => {
  return (
    <div className=''>
         {/* Left */}
         <div className='flex space-x-6'>
            <HeaderOption />
         </div>

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
};

export default HeaderOptions;