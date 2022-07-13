import React from 'react'
import './FooterSection.style.scss'

const FooterSection= () => {
  return (
    <div className='footer-section'>
      <div className='footer-section-container'>
        <div className='footer-section-container-left'>
          <div className='footer-section-container-left-logo'>
            <img src='./assets/logo/ubisoft-full-logo.png' alt='logo' />
          </div>
          <div className="footer-section-container-left-links">
            <ul className='footer-section-container-left-links-list'>
              <li className='footer-section-container-left-links-list-item'><p>contact us</p></li>
              <li className='footer-section-container-left-links-list-item'><p>privacy & legal</p></li>
              <li className='footer-section-container-left-links-list-item'><h5>Interest-Based Ads</h5></li>
              <li className='footer-section-container-left-links-list-item'><h5>Do Not Sell My Personal Information</h5></li>
              <li className='footer-section-container-left-links-list-item'><h5>Set cookies</h5></li>
            </ul>
          </div>
        </div>
        <div className="footer-section-container-middle">
          <div className='footer-section-container-middle-container'>
            <div className='footer-section-container-middle-container-left'>
              <ul className='footer-section-container-middle-container-left-list'>
                <li className='footer-section-container-middle-container-left-list-item'><p>ubisoft connect</p></li>
                <li className='footer-section-container-middle-container-left-list-item'><p>support</p></li>
              </ul>
            </div>
            <div className='footer-section-container-middle-container-mid'>
            <ul className='footer-section-container-middle-container-mid-list'>
                <li className='footer-section-container-middle-container-mid-list-item'><p>investors</p></li>
                <li className='footer-section-container-middle-container-mid-list-item'><p>press</p></li>
              </ul>
            </div>
            <div className='footer-section-container-middle-container-right'>
            <ul className='footer-section-container-middle-container-right-list'>
                <li className='footer-section-container-middle-container-right-list-item'><p>about us</p></li>
                <li className='footer-section-container-middle-container-right-list-item'><p>careers</p></li>
                <li className='footer-section-container-middle-container-right-list-item'><p>locations</p></li>

              </ul>
            </div>
          </div>
        </div>
        <div className='footer-section-container-right'></div>
      </div>
    </div>
  )
}

export default FooterSection