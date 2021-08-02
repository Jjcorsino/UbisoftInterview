import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import './VideoSection.style.scss'

// Use class based component 
export default class GameCard extends Component {
    constructor(props) {
        super(props);
        // set initial state value
        this.state = {
        isOpen: false,
        };
    }
    
    render() {
        const {isOpen } = this.state;

        return (
        <div>
            <div className="card border-0 m-4" >
                <div type="button" onClick={() => this.setState({ isOpen: true })}>
                    <div className="img">
                        <img className="img-icon-play" src="./assets/download.svg" alt="..."/>
                        <img src={this.props.data.image} style={{border:"5px solid",borderColor:this.props.data.border}} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="card-body p-0">
                <h5 className="card-title mt-3">{this.props.data.title}</h5>
            </div>
            </div>
            {/* by click on image it shows larger image in model */}
            {isOpen && (
                <Lightbox
                mainSrc={this.props.data.image}     
                onCloseRequest={() => this.setState({ isOpen: false })}
                />
            )}
        </div>
        );
    }
}