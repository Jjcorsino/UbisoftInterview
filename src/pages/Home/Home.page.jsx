import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu.page';
import GameSlider from '../../components/Games/GameSlider';
const Home = () => {
    return(
        <>
            <Menu/>
            <GameSlider/>
        </>
    );
}


export default Home;