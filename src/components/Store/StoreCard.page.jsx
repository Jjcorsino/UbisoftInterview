import React from 'react'

export default function StoreCard(props) {
    
    const imageCard = props.data.Image;
    const styleImageCard ={
        backgroundImage: `url(${imageCard})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

  return (
    <div className='card-container' style={styleImageCard}>
        <div className="store-card-title">
            <h2>{props.data.title}</h2>
        </div>
    </div>
  )
}
