import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LOGO from '../../images/Logo.png'

export default function Navbar({ flag }) {
    const [HamBurger, setHamBurger] = useState(false);

    const handleToggle = () => {
        setHamBurger(!HamBurger);
    };

    const [navbarBg, setNavbarBg] = useState(false);
    const [navbarText, setNavbarText] = useState('white');
    const [SmallNav, setSmallNav] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setNavbarBg(true);
            setNavbarText('black');
            setSmallNav(true);
        } else {
            setNavbarBg(false);
            setNavbarText('white');
            setSmallNav(false);
        }
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        if (location.pathname !== '/') {
            navigate('/', { state: { targetSection: sectionId } });
        } else {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };

    useEffect(() => {
        if (location.state?.targetSection) {
            const targetSection = document.getElementById(location.state.targetSection);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

    return (
        <>
            <div className={`fixed-navbar ${isSmallScreen && 'bg-white'} flex items-center justify-between px-4 lg:px-10 py-4 ${navbarBg ? 'bg-white shadow' : 'bg-opacity-70'}`}>
                <div>
                    <Link to="/">
                        <img src={LOGO} alt="Img" />
                    </Link>
                </div>
                <div className="lg:hidden text-3xl" onClick={handleToggle}>
                    {HamBurger ? <IoMdClose /> : <GiHamburgerMenu />}
                </div>
                <nav className='hidden lg:block'>
                    <ul className={`flex items-center justify-center leading-none gap-4 text-lg text-${navbarText}`}>
                        <li onClick={(event) => scrollToSection(event, 'games')} className={`hover:text-[#3572EF] ${flag ? 'text-black' : ''} duration-300 cursor-pointer shadow-black`}>Games</li>
                        <li onClick={(event) => scrollToSection(event, 'studio')} className={`hover:text-[#3572EF] ${flag ? 'text-black' : ''} duration-300 cursor-pointer shadow-black`}>Studios</li>
                        <li onClick={(event) => scrollToSection(event, 'perks')} className={`hover:text-[#3572EF] ${flag ? 'text-black' : ''} duration-300 cursor-pointer shadow-black`}>Perks</li>
                        <li onClick={(event) => scrollToSection(event, 'contact')} className={`hover:text-[#3572EF] ${flag ? 'text-black' : ''} duration-300 cursor-pointer shadow-black`}>Contact</li>
                        <Link to="/privacyPolicy">
                            <li className={`hover:text-[#3572EF] ${flag ? 'text-black' : ''} duration-300 cursor-pointer shadow-black`}>Privacy Policy</li>
                        </Link>
                        <Link to="/privacyPolicy">
                            <li className={`hover:text-[#3572EF] ${flag ? 'text-black' : ''} duration-300 cursor-pointer shadow-black`}>Terms of Service</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            {HamBurger && <div className={`bg-white ${SmallNav ? '' : 'bg-opacity-70'} px-4 py-4 lg:hidden fade-in-top`}>
                <ul className=' text-xl text-black space-y-4 '>
                    <li onClick={(event) => scrollToSection(event, 'games')}><span className='text-sky-600'>G</span>ames</li>
                    <li onClick={(event) => scrollToSection(event, 'studio')}><span className='text-sky-600'>S</span>tudios</li>
                    <li onClick={(event) => scrollToSection(event, 'perks')}><span className='text-sky-600'>P</span>erks</li>
                    <li onClick={(event) => scrollToSection(event, 'contact')}><span className='text-sky-600'>C</span>ontact</li>
                    <li>
                        <Link to="/privacyPolicy">
                            <span className='text-sky-600'>P</span>rivacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacyPolicy">
                            <span className='text-sky-600'>T</span>erms of Service
                        </Link>
                    </li>
                </ul>
            </div>}
        </>
    );
}
