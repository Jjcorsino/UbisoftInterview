import React from 'react'

import GameSlider from './GameSlider'
export default function GameSection() {
    return (
        <div className="game-section">
            <div className="game-section-title">
                <h2>Explore More Games</h2>
            </div>

            
            <GameSlider />

            <div class="row">
                <div class="col text-center">
                <button class="btn btn-more">View All Games</button>
                </div>
            </div>

        </div>
    )
}
