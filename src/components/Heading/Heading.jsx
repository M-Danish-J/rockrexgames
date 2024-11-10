import React, { useEffect, useRef, useState } from 'react';
import "./Heading.css";

export default function Heading({ heading, span, description, width }) {
    const headingRef = useRef(null);
    const animateWidthRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stop observing once component is visible
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            if (headingRef.current) {
                observer.unobserve(headingRef.current);
            }
        };
    }, []);

    return (
        <div className='gap-6'>
            <div className={`text-4xl md:flex items-center ${isVisible ? 'headingAnimate' : ''}`} ref={headingRef}>
                <h1>
                    {heading}
                    <span className='text-[#3572EF] pl-4 font-semibold tracking-[5px]'>{span}</span>
                </h1>
                <div className={`md:ml-6 lg:mx-10 h-[3px] bg-[#3572EF] ${isVisible ? 'animateWidth' : ''}`} ref={animateWidthRef}></div>
            </div>
            <p className={`text-base py-4 lg:pr-20 ${width ? 'w-2/3' : ''}`}>
                {description}
            </p>
        </div>
    );
}
