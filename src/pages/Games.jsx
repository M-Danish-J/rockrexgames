// Games.js

import React, { useState } from 'react';
import Heading from '../components/Heading/Heading';
import GameCard from '../components/GameCard/GameCard';
import img1 from '../images/game1.jpg';
import img2 from '../images/game2.jpg';
// import img3 from '../images/game3.jpg';
// import img4 from '../images/game4.jpg';
// import img5 from '../images/game5.jpg';
import img6 from '../images/game6.jpg';
// import img7 from '../images/game7.jpg';
// import img8 from '../images/game8.jpg';
// import img9 from '../images/game9.jpg';
// import img10 from '../images/game10.jpg';
import img11 from '../images/game11.jpg';
// import img12 from '../images/game12.jpg';
// import img13 from '../images/game13.jpg';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Games.css'; // Import the CSS file for styles

const allCards = [
    { text: 'IGI Commando', desc: 'Casual | Mobile', img: img1, android: true, link: "https://play.google.com/store/apps/details?id=com.bf.call.commando.shooting.games" },
    { text: 'Sniper Contracts', desc: 'Casual | Mobile', img: img11, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.sniper.assassin.real.city.sniper.shooter" },
    { text: 'Tennis Clash', desc: 'Casual | Mobile', img: img2, apple: true, linkApple: "https://apps.apple.com/no/app/topspin-trophy-tennis-games/id6499003230" },
    { text: 'Farming Simulator', desc: 'Casual | Mobile', img: img6, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.farming.simulator.modern.newfarming.games", apple: true, linkApple: "https://apps.apple.com/ua/app/farming-games-american-farmer/id6499069064" },
    // { text: 'Stickman Sniper Shooter', desc: 'Casual | Mobile', img: img3, android: true, link: "https://play.google.com/store/apps/details?id=com.bp.stickman.sniper.shooter.free.fungame" },
    // { text: 'Driving School Simulator', desc: 'Casual | Mobile', img: img4, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.driving.school.simulator.driving.games" },
    // { text: 'Ertugrulgazi Game 2020', desc: 'Casual | Mobile', img: img5, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.ertugrulgazi.games2020.realmount.bladefight" },
    // { text: 'Football Worldcup', desc: 'Casual | Mobile', img: img7, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.football.worldcup.newgames" },
    // { text: 'Ninja Assassin Shadow Master', desc: 'Casual | Mobile', img: img8, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.ninja.assassin.shadow.master.creed.fighter.games" },
    // { text: 'Ninja Samurai Hunter', desc: 'Casual | Mobile', img: img9, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.ninja.samurai.assassin.hunter.creed.hero.fighter" },
    // { text: 'Osmanghazi Dirilis Ertugrul', desc: 'Casual | Mobile', img: img10, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.osmanghazi.dirilis.ertugrul.gazi.newgames" },
    // { text: 'Wild Deer Hunter', desc: 'Casual | Mobile', img: img12, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.wild.deer.hunter.animal.hunting.games" },
    // { text: 'Frag Guns Shooter', desc: 'Casual | Mobile', img: img13, android: true, link: "https://play.google.com/store/apps/details?id=com.lss.frag.guns.shooter.boom.pvp.action.game" },
];

const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
};

export default function Games() {
    const [showMore,] = useState(false);

    // const toggleCards = () => {
    //     setShowMore(!showMore);
    // };

    const renderCardChunks = () => {
        const cardsToShow = showMore ? allCards : allCards.slice(0, 4);
        const cardChunks = chunkArray(cardsToShow, 4);

        return (
            <div className={`card-container ${showMore ? 'expanded' : ''}`}>
                {cardChunks.map((chunk, index) => (
                    <div key={index} className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:px-28 pt-2">
                        {chunk.map((card, i) => (
                            <GameCard key={i} {...card} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div id='games' className="my-12">
            <Heading
                heading="OUR"
                span="GAMES"
                description="Excelling in our craft! Our collection features some of the most iconic and popular titles, including Farming Simulator, Sniper Contracts, and recent hits like Tennis and IGI Commando. Discover our world!"
            />
            {renderCardChunks()}
            {/* <div
                onClick={toggleCards}
                className={`toggle-button text-[#3572EF] cursor-pointer hover:text-black`}
            >
                {showMore ? <p>Show less</p> : <p>Explore More</p>}
                {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div> */}
        </div>
    );
}
