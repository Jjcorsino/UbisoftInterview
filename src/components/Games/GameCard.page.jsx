import React from 'react'

export default function GameCard(props) {
    // Display Single Game Card component 
    return (
        <div className="game-card">
            <div className="card border-0 ">
            <img src={props.data.image} className="card-img-top" alt={props.data.name} />
                <div className="card-body p-0">
                    <h5 className="card-title mt-3">{props.data.name}</h5>
                
                    <div className="card-available">
                        {props.data.available&&<p className="card-text">comming soon</p>}
                        {props.data.nintendo&&(<img className="card-icon" src="./assets/nintendo-switch.svg" alt="..."/>)}
                        {props.data.windows&&(<img className="card-icon" src="./assets/windows.svg" alt="..."/>)}
                        {props.data.xbox&&(<img className="card-icon" src="./assets/xbox.svg" alt="..."/>)}
                        {props.data.psp&&(<img className="card-icon" src="./assets/ps4.svg" alt="..."/>)}
                        {props.data.stadia&&(<img className="card-icon" src="./assets/stadia.svg" alt="..."/>)}
                        {props.data.apple&&(<img className="card-icon" src="./assets/apple.svg" alt="..."/>)}
                        {props.data.android&&(<img className="card-icon" src="./assets/android.svg" alt="..."/>)}
                        {props.data.luna&&(<img className="card-icon" src="./assets/luna.svg" alt="..."/>)}

                    </div>
                </div>
            </div>
        </div>
    )
}
