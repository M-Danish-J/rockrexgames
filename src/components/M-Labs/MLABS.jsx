import React from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import mlabs from '../../images/m-labs-logo.svg'
import { Link } from 'react-router-dom'

export default function MLABS() {
    return (
        <div id='labs' className=' my-24 relative'>
            <Heading heading="M" span="LABS" description="M-LABS has a purpose built space to house and groom the best game dev talent in Pakistan via Incubation, Game Jams, Interships and a nationwide fellowship program." width={true} />
            <Link to="https://mlabs.co/" target='_blank'>
                <Button text="Explore" />
            </Link>
            <div className="absolute md:right-0 lg:right-10 xl:right-28 -bottom-40 md:-bottom-6 xl:-bottom-20">
                <img className='w-64' src={mlabs} alt='lab' />
            </div>
        </div>
    )
}
