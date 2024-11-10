import React, { useEffect } from 'react';
import Carousal from '../Carousal/Carousal';
import { useNavigate, useLocation } from 'react-router-dom';

import intro from '../../images/Climax Into.png';

export default function Main() {
    // const [isLarge, setIsLarge] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        if (location.pathname !== '/') {
            navigate('/', { state: { targetSection: sectionId } });
        } else {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                const navbarHeight = document.querySelector('.fixed-navbar').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            // setIsLarge(window.innerWidth <= 990);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className="flex w-full">
                <div className="lg:w-1/2 pt-16 flex-1">
                    <img className='heroImg' src={intro} alt="Main" usemap="#workmap" />
                    <map name='workmap'>
                        <area onClick={(event) => scrollToSection(event, 'hire')} target="_self" alt="Hire" title="Hire" coords="488,439,87,571" shape="rect" />
                    </map>
                </div>

                <div className="w-[58%] hidden lg:block select-none">
                    <Carousal />
                </div>
            </div>
        </div>
    );
}
