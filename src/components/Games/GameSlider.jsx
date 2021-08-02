import React from 'react'
import './Game.style.scss'

import Carousel, { slidesToShowPlugin,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'


import GameCard from './GameCard.page';


export default function GameSlider() {
    // Hardcoded value of all games in array 
    // Fetch this array from any database and we can set dynamic game cards in slider
    const GameData = [
        {
            "name":"Prince of Persia: The Sands of Time Remake" ,
            "available":"2021",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-5.jpg"
        },
        {
            "name":"AGOS: A Game of Space",
            "available":"comming soon",
            "xbox":false,
            "psp":false,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-6.jpg"
        },
        {
            "name":"Assassin's Creed Valhalla" ,
            "available":"comming soon",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":true,
            "image":"./assets/explore-more-games-sample-7.jpg"
        },
        {
            "name":"Far Cry 6" ,
            "available":"comming soon",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-8.jpg"
        },
        {
            "name":"Hyper Scape" ,
            "available":"play now",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-9.jpg"
        },
        {
            "name":"Watch Dogs : Legion" ,
            "available":"comming soon",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-1.jpg"
        },
        {
            "name":"Immortals Fenyx Rising" ,
            "available":"comming soon",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-2.jpg"
        },
        {
            "name":"Rider Republic" ,
            "available":"comming soon",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-3.jpg"
        },
        {
            "name":"Scott Pilgrim" ,
            "available":"comming soon",
            "xbox":true,
            "psp":true,
            "windows":true,
            "stadia":false,
            "image":"./assets/explore-more-games-sample-4.jpg"
        }
    ]

    return (
        <div>
        {/* dynamic responsive carousel  */}
            <Carousel
                plugins={[
                    'clickToChange',
                    'infinite',
                    {
                        resolve: arrowsPlugin,
                        options: {
                        arrowLeft: <button className="slider-arrow slider-arrow-left"><FontAwesomeIcon icon={faAngleLeft} /></button>,
                        arrowRight: <button className="slider-arrow slider-arrow-right"><FontAwesomeIcon icon={faAngleRight} /></button>,
                        addArrowClickHandler: true,
                        }},
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 6
                    }
                    },
                ]}
                breakpoints={{
                    640: {
                    plugins: [
                        'clickToChange',
                        'infinite',
                        {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <button className="slider-arrow slider-arrow-left"><FontAwesomeIcon icon={faAngleLeft} /></button>,
                            arrowRight: <button className="slider-arrow slider-arrow-right"><FontAwesomeIcon icon={faAngleRight} /></button>,
                            addArrowClickHandler: true,
                        }},
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 2
                            }
                        },
                        ]
                    },
                    900: {
                    plugins: [
                        'clickToChange',
                        'infinite',
                        {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <button className="slider-arrow slider-arrow-left"><FontAwesomeIcon icon={faAngleLeft} /></button>,
                         
                         arrowRight: <button className="slider-arrow slider-arrow-right"><FontAwesomeIcon icon={faAngleRight} /></button>,
                         
                        addArrowClickHandler: true,
                        }},
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 4
                        }
                    },
                    ]
                    }
                }}
                >
                {/* Map all Game card in carousel */}
                {GameData.map(game=>{
                        return(
                        <div className="">
                            <GameCard
                                data = {game}
                            />
                        </div>)
                })}
                    
            </Carousel>
        </div>
    )
}
