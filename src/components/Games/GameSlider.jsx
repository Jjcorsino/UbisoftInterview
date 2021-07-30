import React from 'react'
import './Game.style.scss'

import Carousel, { slidesToShowPlugin,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'


import GameCard from './GameCard.page';


export default function GameSlider() {
    return (
        <div>
            <Carousel
                plugins={[
                    'clickToChange',
                    'centered',
                    'infinite',
                    {
                        resolve: arrowsPlugin,
                        options: {
                        arrowLeft: <button><FontAwesomeIcon icon={faAngleLeft} /></button>,
                         
                        arrowRight: <button><FontAwesomeIcon icon={faAngleRight} /></button>,
                         
                        addArrowClickHandler: true,
                        }},
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 6
                    }
                    },
                ]}
                >
                    <div>
                        <GameCard/>
                    </div>
                    <div><GameCard/></div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
            </Carousel>
        </div>
    )
}
