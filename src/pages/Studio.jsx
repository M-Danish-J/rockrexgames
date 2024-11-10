import React, { useState, useRef, useEffect } from 'react';
import Heading from '../components/Heading/Heading';
import { BiImage } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Img1 from '../images/studio_1.jpg';
import Img2 from '../images/studio_2.jpg';
import Img3 from '../images/studio_3.jpg';
import Img4 from '../images/studio_4.jpg';
import Img5 from '../images/studio_5.jpg';
import Img6 from '../images/studio_6.jpg';

export default function Studio() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        showModal();
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleClickOutsideModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleCancel();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutsideModal);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideModal);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideModal);
        };
    }, [isModalOpen]);

    const images = [Img1, Img2, Img3, Img4, Img5, Img6];

    return (
        <div id='studio' className='mt-10 min-h-screen'>
            <Heading heading="THE" span="STUDIO" description="Strive for excellence and enjoy life! Join us for an outstanding work environment, incredible benefits, and a culture that celebrates inclusion and diversity on a global scale!" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-16 cursor-pointer">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleImageClick(index)}
                    >
                        <img src={image} alt={`img ${index + 1}`} />
                        {hoveredIndex === index && (
                            <div className="absolute inset-0 bg-white opacity-80 flex items-center justify-center">
                                <BiImage size={80} color="#3572EF" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75" >
                    <div className="bg-transparent relative text-white border-4 border-black" ref={modalRef}>
                        <img className='w-full h-full' src={images[selectedImageIndex]} alt={`img ${selectedImageIndex + 1}`} />

                        <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white px-6 py-3 rounded">
                            <FiChevronLeft size={50} color="#3572EF" />
                        </button>
                        <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white px-6 py-3 rounded">
                            <FiChevronRight size={50} color="#3572EF" />
                        </button>

                        <span className="absolute -bottom-10 left-4">{`Image ${selectedImageIndex + 1} of ${images.length}`}</span>

                        <button onClick={handleCancel} className="absolute -bottom-10 right-4">
                            <MdClose size={32} color="#3572EF" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
