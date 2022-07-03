import React from 'react'
import './SocialSection.style.scss'

const SocialSection = () => {
  return (
    <div className="social-section">
      <div className="social-text"><h5>Visit Other Ubisoft Channels</h5></div>
      <div className="social-icons">
        <a href="https://twitter.com/Ubisoft" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/Ubisoft/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="htttps//www.twitch.tv/ubisoft" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitch"></i></a>
        <a href="https://www.youtube.com/user/Ubisoft" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        <a href="https://www.instagram.com/ubisoft/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  )
}

export default SocialSection