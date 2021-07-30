import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu.page';

import GameSection from '../../components/Games/GameSection.page';
import VideoSection from '../../components/Video/VideoSection.page';
import NewsSection from '../../components/News/NewsSection.page';
const Home = () => {
    return(
        <>
            <Menu/>
            {/* <GameSection/> */}
            <NewsSection/>
            {/* <VideoSection/> */}
        </>
    );
}


export default Home;