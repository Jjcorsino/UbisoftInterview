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
                    
                    'infinite',
                    {
                        resolve: arrowsPlugin,
                        options: {
                        arrowLeft: <button className="slider-arrow"><FontAwesomeIcon icon={faAngleLeft} /></button>,
                         
                        arrowRight: <button className="slider-arrow"><FontAwesomeIcon icon={faAngleRight} /></button>,
                         
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
                            arrowLeft: <button className="slider-arrow"><FontAwesomeIcon icon={faAngleLeft} /></button>,
                            
                            arrowRight: <button className="slider-arrow"><FontAwesomeIcon icon={faAngleRight} /></button>,
                            
                            addArrowClickHandler: true,
                        }},
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 3
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
                        arrowLeft: <button className="slider-arrow"><FontAwesomeIcon icon={faAngleLeft} /></button>,
                         
                        arrowRight: <button className="slider-arrow"><FontAwesomeIcon icon={faAngleRight} /></button>,
                         
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
                   
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
                    <div><GameCard/></div>
            </Carousel>
        </div>
    )
}
