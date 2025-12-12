import React from 'react'

function HomeComponent({ title, src }) {
  return (
    <div>
      <div className='cursor-pointer w-[125px] h-[90px] border-[1px]  border-[#F0F0F0] rounded-[12px] flex flex-col items-center justify-center gap-2 hover:bg-[#F9F9F9] duration-300'>
        <img className='w-[32px]' src={src} alt="rasm" />
        <p className='text-[19px] text-[#191919] hover:text-[#FF7010] duration-200'>{title}</p>
      </div>
    </div>
  )
}

export default HomeComponent