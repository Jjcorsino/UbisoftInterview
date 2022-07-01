import React from 'react'
import StoreCardFeatured from './StoreCardFeatured.page'
import './StoreSection.style.scss'

const StoreSection = () => {
  return (
    <div className='store-section'>
        <div className="store-section-title">
            <h2>Ubisoft Store</h2>
        </div>
        <StoreCardFeatured />
    </div>
  )
}

export default StoreSection