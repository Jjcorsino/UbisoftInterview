import React from 'react'

const HeroCard = (props) => {
    
  const imageBackground = {
    backgroundImage: `url(${props.data.imageBackground})`,
    height: '100vh',
    width: '100%',
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const buttonStyle = `hero-btn-one ${props.data.game}` 
  const buttonStyleTwo = `hero-btn-two ${props.data.game}` 

  
  return (
    <div className='hero-card' style={imageBackground}>
        <div className="hero-tittle"><h1>{props.data.tittle}</h1></div>
        <div className="hero-sub-tittle"><h2>{props.data.subtittle}</h2></div>
        <div className="hero-buttons">
            <button className={buttonStyle}>{props.data.buttonOne}</button>
            <button className={buttonStyleTwo}>{props.data.buttonTwo}</button>
        </div>
        <div className="hero-image">
            <img src={props.data.logoGame} alt={props.data.logoGame} className="hero-logo" />
        </div>
    </div>
  )
}

export default HeroCard