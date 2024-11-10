import React from 'react'
import './Button.css'
import { FaLinkedin } from 'react-icons/fa'

export default function Button({ text, icon, animateBg }) {
    return (
        <div>
            <button className={`bg-[#3572EF] flex gap-2 hover:underline hover:bg-black px-8 py-1 text-white rounded-sm ${animateBg ? 'colorAnimate' : ''}`} onMouseOver={(e) => e.target.classList.remove('colorAnimate')} onMouseLeave={(e) => e.target.classList.add('colorAnimate')}>{text}{icon && <FaLinkedin size={25} />}</button>
        </div>
    )
}
