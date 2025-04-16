import Link from 'next/link';
import React from 'react';
import HeaderOption from './HeaderOption';
import {
  MapIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  EllipsisVerticalIcon
} from "@heroicons/react/24/outline";

const HeaderOptions = () => {
  return (
    <div className='flex items-center w-full justify-evenly text-sm lg:text-base
    lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] border-gray-100'>
         {/* Left */}
         <div className='flex space-x-6'>
            <HeaderOption Icon={MagnifyingGlassIcon} title={'All'} selected />
            <HeaderOption Icon={PhotoIcon} title={'Images'} />
            <HeaderOption Icon={PlayIcon} title={'Videos'} />
            <HeaderOption Icon={NewspaperIcon} title={'News'} />
            <HeaderOption Icon={MapIcon} title={'Maps'} />
            <HeaderOption Icon={EllipsisVerticalIcon} title={'More'} />
         </div>

        {/* Right */}
        <div className='flex space-x-4 border-b-4 border-transparent'>
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