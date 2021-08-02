import React from 'react'
import './VideoSection.style.scss'

import Carousel, { slidesToShowPlugin,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'


import VideoCard from './VideoCard';


export default function VideoSlider() {


    // Hardcoded Video data with border color of image
    const VideoData = [
        {
            "title":"Rainbow Six: Siega: Operation Steel Wave Reveal",
            "image":"./assets/featured-videos-sample-1.jpg",
            "border":"yellow"
        },
        {
            "title":"Assassin's Creed Valhalla: Cinematic World Premiere Trailer",
            "image":"./assets/featured-videos-sample-2.jpg",
            "border":"skyblue"
        },
        {
            "title":"Rabbids Coding: Free Lessons Through Puzzle Solving",
            "image":"./assets/featured-videos-sample-3.jpg",
            "border":"yellow"
        },
    ]
    return (
        <div >
        {/* Responsive slider with 3 News and no arrow in desktop but display single card in mobile with action arrow */}
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
                   
                   {VideoData.map(video => {
                       return(
                           <div>
                               <VideoCard data={video}/>
                           </div>
                       )
                   })}
                
                
            </Carousel>
        </div>
    )
}
