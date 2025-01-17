import React from 'react'

import GameSlider from './GameSlider'
export default function GameSection() {

    return (
        // Display Full Explore Game Section with Slider and button

        <div className="game-section">
            <div className="game-section-title">
                <h2>Explore More Games</h2>
            </div>

            <GameSlider />{/* Display Game Slider */}

            <div className="row m-0 p-0">
                <div className="col text-center">
                <button className="btn btn-more">View All Games</button>
                </div>
            </div>

        </div>
    )
}
