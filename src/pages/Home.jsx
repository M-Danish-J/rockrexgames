import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'

import Games from './Games'
import Hiring from '../components/Hiring/Hiring'
import Perks from './Perks'
import Studio from './Studio'
import Footer from '../components/Footer/Footer'
import Contact from './Contact'

export default function Home() {
    return (
        <div className='relative select-none'>
            <div className="fixed left-0 right-0 top-0 z-10">
                <Navbar />
            </div>
            <Main />
            <div className="mx-[5vw] xl:mx-[13vw]">
                <Games />
                <Studio />
                <Perks />
                <Hiring />
                {/* <MLABS /> */}
                <Contact />
            </div>
            <Footer />
        </div>
    )
}
