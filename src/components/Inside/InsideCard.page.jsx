import React from 'react'

export default function InsideCard(props) {
    const imageInsideBackground = props.data.image;

    const styleImage = {
        backgroundImage: `url(${imageInsideBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div className='card-inside' style={styleImage}>
      <div className="block"></div>
        <div className="card-inside-title">
            <h2>{props.data.title}</h2>
        </div>
    </div>
  )
}
