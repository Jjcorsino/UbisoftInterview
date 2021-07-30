import React from 'react'

export default function GameCard() {
    return (
        <div>
            <div className="card border-0 m-3">
            <img src="./assets/explore-more-games-sample-6.jpg" className="card-img-top" alt="..." />
                <div className="card-body p-0">
                    <h5 className="card-title mt-3">Far Cry 6</h5>
                    <p className="card-status m-0">Comming soon</p>
                
                    <div className="card-available">
                        <img className="card-icon" src="./assets/xbox.svg" />
                        <img className="card-icon" src="./assets/ps4.svg" />
                        <img className="card-icon" src="./assets/windows.svg" />
                        <img className="card-icon" src="./assets/stadia.svg" />

                    </div>
                </div>
            </div>
        </div>
    )
}
