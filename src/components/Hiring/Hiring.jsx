import React from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'

export default function Hiring() {
    return (
        <div id='hire' className='my-10'>
            <Heading heading="WE'RE" span="HIRING" description="Driven and talented? Ready to be part of an exceptional team? We can't wait to welcome you aboard." />
            <Link to="https://www.linkedin.com/company/climax-game-studios/" target='_blank'>
                <Button text="Apply" icon={true} animateBg={true} />
            </Link>
        </div>
    )
}
