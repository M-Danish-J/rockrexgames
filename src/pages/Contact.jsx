import React from 'react'
import Heading from '../components/Heading/Heading'
import SmallHeading from '../components/SmallHeading/SmallHeading'
import { TbMailFilled } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import MyForm from '../components/MyForm/MyForm';

export default function Contact() {
    return (
        <div id='contact' className='mt-52 md:mt-0'>
            <Heading heading="GET IN" span="TOUCH" description="We’re excited to hear from you!" />
            <div className="flex flex-col mt-20 md:mt-0 md:flex-row md:w-full items-baseline gap-4">
                <div className="w-full md:w-1/2">
                    <SmallHeading text='LEAVE US A MESSAGE' />
                    <div className='bg-gray-100 px-4 py-4 shadow-xl mt-4'>
                        <MyForm />
                    </div>
                </div>
                <div className="mt-16 md:w-1/2">
                    <SmallHeading text='OUR DETAILS' />
                    <div className="space-y-5 mt-8 text-md">
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-100 px-2 py-2 rounded-md">
                                <TbMailFilled size={18} color='#3572EF' />
                            </div>
                            <p>Email:
                                <span className='text-[#3572EF] text-sm'>iamsikandarali@gmail.com</span>
                            </p>
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <div className="bg-gray-100 px-2 py-2 rounded-md">
                                <ImLocation size={18} color='#3572EF' />
                            </div>
                            <p>Head Office:
                                <span className='text-[#3572EF] text-sm'>  8 The Green, Suite 12483, Dover, DE 19901</span>
                            </p>
                        </div> */}
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-100 px-2 py-2 rounded-md">
                                <ImLocation size={18} color='#3572EF' />
                            </div>
                            <p>Studio Address:
                                <span className='text-[#3572EF] text-sm'>Gulber III,  Lahore, 54500</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">

                        <iframe title='MAP' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27213.593047039205!2d74.34325815!3d31.5049528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a28ff1d39%3A0xf71e739b84b3c3c!2sGulberg%20III%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1718531291409!5m2!1sen!2s" width="100%" height="450" style={{ border: "1px solid yellow" }} allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
