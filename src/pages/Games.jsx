// Games.js

import React, { useState } from 'react';
import { Pagination } from 'antd';
import Heading from '../components/Heading/Heading';
import GameCard from '../components/GameCard/GameCard';
import img1 from '../images/our-games/Call of IGI Commando Adventure.png';
// import img2 from '../images/our-games/Command Cover Fire Strike.png';
import img3 from '../images/our-games/Cover Fire IGI Commando- games.png';
import img4 from '../images/our-games/Creed Ninja Assassin Hero.png';
import img5 from '../images/our-games/Ertugrul Gazi 21 Sword Games.png';
import img6 from '../images/our-games/IGI Commando-Secret Missions.png';
import img7 from '../images/our-games/Modern Commando 3D Army Games.png';
import img8 from '../images/our-games/Ninja Assassin Creed Samurai.png';
import img9 from '../images/our-games/Ninja Assassin Creed Shadow.png';
import img10 from '../images/our-games/Ninja Creed Assassin Warrior.png';
import img11 from '../images/our-games/Ninja Hunter Samurai Assassins.png';
import img12 from '../images/our-games/Ninja Samurai Assassin Games.png';
import img13 from '../images/our-games/Punch Boxing Fighter The fight.png';
import img14 from '../images/our-games/Real Commando Ops Secret game.png';
import img15 from '../images/our-games/Sniper 3D Strike Fury Shooter.png';
import img16 from '../images/our-games/Wild Deer Hunting Adventure.png';
import img17 from '../images/our-games/Wukong  Legend of Dark Myth.png';
import './Games.css'; 

const allCards = [
    { text: 'Call of IGI Commando Adventure', desc: 'Casual | Mobile', img: img1, android: true, link: "https://play.google.com/store/apps/details?id=com.sg.igi.commando.missions.free.shooting.games.fps" },
    // { text: 'Command Cover Fire Strike', desc: 'Casual | Mobile', img: img2, android: true, link: "https://play.google.com/store/apps/details?id=com.bbg.cover.fire.igicommando.offline.shooting.games" },
    { text: 'Cover Fire IGI Commando', desc: 'Casual | Mobile', img: img3, android: true, link: "https://play.google.com/store/apps/details?id=com.bbg.cover.fire.igicommando.offline.shooting.games" },
    { text: 'Creed Ninja Assassin Hero', desc: 'Casual | Mobile', img: img4, android: true, link: "https://play.google.com/store/apps/details?id=com.bbg.creed.ninja.assassin.hero.fighting.games" },
    { text: 'Ertugrul Gazi 21 Sword Games', desc: 'Casual | Mobile', img: img5, android: true, link: "https://play.google.com/store/apps/details?id=com.rrg.ertugrulgazi.game.riseof.ottoman.empire.games" },
    { text: 'IGI Commando-Secret Missions', desc: 'Casual | Mobile', img: img6, android: true, link: "https://play.google.com/store/apps/details?id=com.rrg.commando.secret.mission.army.shooting.games" },
    { text: 'Modern Commando 3D Army Games', desc: 'Casual | Mobile', img: img7, android: true, link: "https://play.google.com/store/apps/details?id=com.modern.commando.newshooting.army.games" },
    { text: 'Ninja Assassin Creed Samurai', desc: 'Casual | Mobile', img: img8, android: true, link: "https://play.google.com/store/apps/details?id=com.bbg.ninja.assassin.samurai.creed.fighting.games" },
    { text: 'Ninja Assassin Creed Shadow', desc: 'Casual | Mobile', img: img9, android: true, link: "https://play.google.com/store/apps/details?id=com.bbg.ninja.assassin.creed.shadow.fight.fighting.games" },
    { text: 'Ninja Creed Assassin Warrior', desc: 'Casual | Mobile', img: img10, android: true, link: "https://play.google.com/store/apps/details?id=com.rrg.ninja.assassin.warrior.arashi.creed.shadow.fighter.games" },
    { text: 'Ninja Hunter Samurai Assassins', desc: 'Casual | Mobile', img: img11, android: true, link: "https://play.google.com/store/apps/details?id=com.rrg.ninja.hunter.assassin.samurai.creed.hero.games" },
    { text: 'Ninja Samurai Assassin Games', desc: 'Casual | Mobile', img: img12, android: true, link: "https://play.google.com/store/apps/details?id=com.rrg.ninja.samurai.assassin.hunter.creed.hero" },
    { text: 'Punch Boxing Fighter The fight', desc: 'Casual | Mobile', img: img13, android: true, link: "https://play.google.com/store/apps/details?id=com.bbg.punch.boxing.fighter.fighting.games" },
    { text: 'Real Commando Ops Secret game', desc: 'Casual | Mobile', img: img14, android: true, link: "https://play.google.com/store/apps/details?id=com.rrg.real.commando.secret.mission.games" },
    { text: 'Sniper 3D Strike Fury Shooter', desc: 'Casual | Mobile', img: img15, android: true, link: "https://play.google.com/store/apps/details?id=com.rrg.sniper.assassin.fury.fps.offline.games" },
    { text: 'Wild Deer Hunting Adventure', desc: 'Casual | Mobile', img: img16, android: true, link: "https://play.google.com/store/apps/details?id=com.bbg.wild.deer.hunter.animal.hunting.games" },
    { text: 'Wukong Legend of Dark Myth', desc: 'Casual | Mobile', img: img17, android: true, link: "https://play.google.com/store/apps/details?id=com.cgs.legends.of.dark.myth" },
];

export default function Games() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCards = allCards.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div id="games" className="my-12">
            <Heading
                heading="OUR"
                span="GAMES"
                description="Excelling in our craft! Our collection features some of the most iconic and popular titles, including Farming Simulator, Sniper Contracts, and recent hits like Tennis and IGI Commando. Discover our world!"
            />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:px-28 pt-2">
                {currentCards.map((card, i) => (
                    <GameCard key={i} {...card} />
                ))}
            </div>
            <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={allCards.length}
                onChange={handlePageChange}
                className="flex justify-center mt-4"
            />
        </div>
    );
}
