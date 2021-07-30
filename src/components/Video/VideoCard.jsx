//  import ModalImage from "react-modal-image";
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


import './VideoSection.style.scss'

const images = [
    './assets/featured-videos-sample-1.jpg',

  ];

// export default function GameCard() {
//     return (
//         <div>
//             <div className="card border-0 m-4">
            
//             <img src="./assets/featured-videos-sample-1.jpg" className="card-img-top" alt="..." />
//                 <div className="card-body p-0">
//                     <h5 className="card-title mt-3">Rainbow Six: Siega: Operation Steel Wave Reveal</h5>
                   
                
                  
//                 </div>
//             </div>
//         </div>
//     )
// }
export default class GameCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        photoIndex: 0,
        isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
        <div>
            <div className="card border-0 m-4">
                <div type="button" onClick={() => this.setState({ isOpen: true })}>
                    <div className="img">
                        <img className="img-icon-play" src="./assets/download.svg" alt="..."/>
                        <img src="./assets/featured-videos-sample-1.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="card-body p-0">
                <h5 className="card-title mt-3">Rainbow Six: Siega: Operation Steel Wave Reveal</h5>
            </div>
            </div>
            
            {isOpen && (
                <Lightbox
                mainSrc={images[photoIndex]}     
                onCloseRequest={() => this.setState({ isOpen: false })}
                />
            )}
        </div>
        );
    }
}