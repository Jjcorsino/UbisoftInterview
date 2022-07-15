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
        <div className='footer-section-container-right'>
          <div className='footer-section-container-right-container'>
            <div className='footer-section-container-right-container-up'>
              <p className='language'>English</p>
            </div>
            <div className='footer-section-container-right-container-mid'>
              <img src='https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3TWaCi5CyuZBRpzsRP1iy/6384003e7b534b4962db554a21c696bb/esrb-privacy-footer.jpg' alt='logo' />
            </div>
            <div className='footer-section-container-right-container-down'>
              <p>© 2022 Ubisoft Entertainment. All Rights Reserved.<br></br>
              Ubisoft, Ubi.com and the Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S. and/or other countries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection