import React from 'react'
import './VideoSection.style.scss'

import VideoSlider from './VideoSlider'
export default function VideoSection() {
    // Display Video section with slider
    return (
        <div className="video-section">
            <div className="video-section-title">
                <h2>Featured Videos</h2>
            </div>

                 <VideoSlider />
             <div class="row m-0 p-0">
                <div class="col text-center">
                <button class="btn btn-more">View All Trailers</button>
                </div>
            </div>
        </div>
    )
}
