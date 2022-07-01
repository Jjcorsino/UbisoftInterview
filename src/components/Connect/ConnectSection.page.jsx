import React from 'react'
import './ConnectSection.style.scss'

const ConnectSection = () => {
  const styleCenter = {
    backgroundImage: 'url(./assets/center-effect.png)',
    backgroundPosition: 'top',
    backgroundSize: '49px 25px',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className='connect-section' style={styleCenter}>
      <div className="connect-data">
        <div className="connect-image">
            <img src="./assets/ubi-connect-image.png" alt='ubi-connect'/>
        </div>
        <div className="connect-body">
            <div className="connect-title"><h2>Ubisoft Connect</h2></div>
            <div className="connect-subtitle"><h4>Join The Ubisoft Community! <span>Console | PC | Mobile | Web</span> </h4></div>
            <div className="connect-button"><button>Discover</button> </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectSection