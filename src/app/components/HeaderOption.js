import React from 'react';


const HeaderOption = ({Icon, title, selected}) => {
  return (
    <div className={`p-3 flex items-center space-x-1 border-b-4
    border-transparent hover:text-blue-500 cursor-pointer hover:border-b-blue-500
    ${selected && 'text-blue-500 border-b-blue-500'}`}>
      <Icon className='h-4'/>
      <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption;