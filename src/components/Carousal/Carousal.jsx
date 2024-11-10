import React from "react";
import { Carousel } from 'antd';

import Img1 from '../../images/hero_slide_1.png'
import Img2 from '../../images/hero_slide_2.png'
import Img3 from '../../images/hero_slide_3.png'
import Img4 from '../../images/hero_slide_4.png'
import Img5 from '../../images/hero_slide_5.png'

const contentStyle = {
    width: '100%'
};

export default function Carousal() {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    return (
        <>
            <Carousel afterChange={onChange} dots={false} fade={true} autoplay={true} infinite={true} speed={100}>
                <div>
                    <img style={contentStyle} src={Img1} alt="carousal" />
                </div>
                <div>
                    <img style={contentStyle} src={Img2} alt="carousal" />
                </div>
                <div>
                    <img style={contentStyle} src={Img3} alt="carousal" />
                </div>
                <div>
                    <img style={contentStyle} src={Img4} alt="carousal" />
                </div>
                <div>
                    <img style={contentStyle} src={Img5} alt="carousal" />
                </div>
            </Carousel>
        </>
    )
}
