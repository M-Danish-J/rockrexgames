import React from 'react'

export default function PerkCard({ icon: Icon, text }) {
    return (
        <div className='flex items-center justify-center flex-col px-2 md:px-6 lg:py-10 py-6 lg:px-10 xl:px-16 gap-4 hover:bg-[#3572EF] text-slate-400 hover:scale-105 hover:text-white rounded-sm cursor-pointer duration-300'>
            <div className="text-3xl hover:scale-105 text-[#7b9cde] duration-300 hover:text-black md:text-4xl lg:text-5xl">
                <Icon />
            </div>
            <div className="">
                <p className=' text-[10px] md:text-lg lg:text-xl text-center leading-3 md:leading-tight lg:leading-none'>{text}</p>
            </div>
        </div>
    )
}
