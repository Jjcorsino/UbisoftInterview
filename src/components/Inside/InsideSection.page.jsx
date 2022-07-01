import React from 'react'
import InsideCardFeatured from './InsideCardFeatured.page'
import './InsideSection.style.scss'

const InsideSection = () => {

  return (
    <div className='inside-section'>
        <div className="inside-section-title">
            <h2>Inside Ubisoft</h2>
        </div>
        <InsideCardFeatured/>
    </div>
  )
}

export default InsideSection