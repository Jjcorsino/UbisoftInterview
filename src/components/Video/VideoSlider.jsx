import React from 'react'
import './VideoSection.style.scss'

import Carousel, { slidesToShowPlugin,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'


import VideoCard from './VideoCard';


export default function VideoSlider() {
    return (
        <div >
            <Carousel
                plugins={[
                    
                    
                    'infinite',
                     
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 3
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
                            numberOfSlides: 1
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
                        numberOfSlides: 1
                        }
                    },
                    ]
                    }
                }}
                >
                   
                <div><VideoCard/></div>
                <div><VideoCard/></div>
                <div><VideoCard/></div>
                
            </Carousel>
        </div>
    )
}
