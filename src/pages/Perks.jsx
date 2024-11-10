import React from 'react'
import SmallHeading from '../components/SmallHeading/SmallHeading'
import PerkCard from '../components/PerkCard/PerkCard'
import { FcLeave } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcSlrBackSide } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FcSteam } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";

export default function Perks() {
    return (
        <div id='perks' className=' mt-16'>
            <SmallHeading text="OUR PERKS" />
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-10 xl:gap-x-16 py-10">
                <PerkCard icon={FcLeave} text="Leaves/Vacation" />
                <PerkCard icon={FcSlrBackSide} text="Fun Events/Trips" />
                <PerkCard icon={FcSearch} text="Internet Allowance" />
                <PerkCard icon={FcSteam} text="Gaming Areas" />
                <PerkCard icon={FcPaid} text="Recognition and Reward" />
                <PerkCard icon={FcPositiveDynamic} text="Career Growth" />
                <PerkCard icon={FcWorkflow} text="Subscriptions to Industory Tools" />
            </div>
        </div>
    )
}
