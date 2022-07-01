import React from 'react';

import Menu from '../../components/Menu/Menu.page';

import GameSection from '../../components/Games/GameSection.page';
import VideoSection from '../../components/Video/VideoSection.page';
import NewsSection from '../../components/News/NewsSection.page';
import HeroSection from '../../components/Hero/HeroSection';
import StoreSection from '../../components/Store/StoreSection.page';
import InsideSection from '../../components/Inside/InsideSection.page';
import ConnectSection from '../../components/Connect/ConnectSection.page';
import SocialSection from '../../components/Socials/SocialSection.page';
import FooterSection from '../../components/Footer/FooterSection.page';
const Home = () => {
    return(
        <>
            
            <Menu/>             {/* Display Navbar Menu  */}
            <HeroSection/>      {/* Display Hero Section */}
            <GameSection/>      {/* Display Explore More Game Section and slider */}
            <NewsSection/>      {/* Display Latest News Section with filter */}
            <StoreSection/>     {/* Display Store Section */}
            <InsideSection/>    {/* Display Inside Section */}
            <VideoSection/>     {/* Display Video section */}
            <ConnectSection/>   {/* Display Connect Section */}
            <SocialSection/>    {/* Display Social Section */}
            <FooterSection/>    {/* Display Footer Section */}
        </>
    );
}


export default Home;