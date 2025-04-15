'use client';
import { MicrophoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const Header = () => {
    const searchInputRef = useRef(null);
    const router = useRouter();
  return (
    <header>
        <Image 
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt='logo' 
        height={40}
        width={120}
        onClick={()=> router.push('/')}
        className='cursor-pointer'
        />
        <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input ref={searchInputRef} type='text' className='flex-grow w-full focus:outline-none'/>
            <XMarkIcon 
            className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110 hover:text-gray-800' 
            onClick={()=>(searchInputRef.current.value = "")}
            />
            <MicrophoneIcon 
            className='h-6 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-110 hover:text-gray-800'
            />
        </form>
        
    </header>
  )
}

export default Header