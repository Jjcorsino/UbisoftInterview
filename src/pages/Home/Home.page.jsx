import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu.page';

import GameSection from '../../components/Games/GameSection.page';
const Home = () => {
    return(
        <>
            <Menu/>
            <GameSection/>
        </>
    );
}


export default Home;