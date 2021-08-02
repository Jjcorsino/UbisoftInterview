import React from 'react';

import Menu from '../../components/Menu/Menu.page';

import GameSection from '../../components/Games/GameSection.page';
import VideoSection from '../../components/Video/VideoSection.page';
import NewsSection from '../../components/News/NewsSection.page';
const Home = () => {
    return(
        <>
            
            <Menu/>             {/* Display Navbar Menu  */}
            <GameSection/>      {/* Display Explore More Game Section and slider */}
            <NewsSection/>      {/* Display Latest News Section with filter */}
            <VideoSection/>     {/* Display Video section */}
        </>
    );
}


export default Home;