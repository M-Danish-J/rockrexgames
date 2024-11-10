import React from 'react'
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function GameCard({ text, desc, img, apple, android, link, linkApple }) {
    return (
        <div className='relative rounded-sm'>
            <div>
                <img src={img} alt='game' />
            </div>
            <div className="absolute bottom-0 left-0 w-full text-white">
                <div className="flex items-center justify-between bg-black bg-opacity-30 px-1 lg:px-2 py-1 lg:py-2">
                    <div className="leading-tight">
                        <p className='font-semibold md:text-base'>{text}</p>
                        <p className='text-[10px] md:text-xs'>{desc}</p>
                    </div>
                    <div className="flex gap-1">
                        {apple &&
                            <Link target='_blank' to={linkApple}>
                                <div className="flex cursor-pointer bg-black text-white px-1 xl:px-2 py-1 rounded-md hover:bg-white hover:text-black gap-1">
                                    <div className="text-xl xl:text-2xl">
                                        <AiFillApple />
                                    </div>
                                    <p className='text-[10px] xl:text-xs tracking-tighter leading-tight'>Available on <br /> Apple store</p>
                                </div>
                            </Link>
                        }
                        {android &&
                            <Link target='_blank' to={link}>
                                <div className="flex cursor-pointer bg-black text-white px-1 xl:px-2 py-1 rounded-md hover:bg-white hover:text-black gap-1">
                                    <div className="text-xl xl:text-2xl">
                                        <AiFillAndroid />
                                    </div>
                                    <p className='text-[10px] xl:text-xs tracking-tighter leading-tight'>Available on <br /> Google Play</p>
                                </div>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
