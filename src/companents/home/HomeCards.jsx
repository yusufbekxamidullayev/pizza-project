import React from 'react'

function HomeCards({ src, title, title2 }) {
    return (
        <div className="max-w-[300px] w-full h-[343px]  rounded-[12px] border-[1px]  border-[#F0F0F0]">
            <div className="flex items-center justify-center  overflow-hidden">
                <div className=''>
                    <img className='w-[300px] h-[300px]' src={src} alt="" />
                </div>
                <div className="absolute bottom-7 px-3">
                    <p className="text-[24px] text-[orangered] font-semibold">{title}</p>
                    <p className="text-[24px] text-[orangered] font-semibold">{title2}</p>
                </div>
            </div>
        </div>

    )
}

export default HomeCards