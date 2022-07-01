import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Menu.page.scss'


const Menu = () => {

    const [menuBar, setMenuBar] = useState(false)

    const handleClick = () => {
        setMenuBar(!menuBar)
    }
    const closeMobileMenuBar = () => {
        setMenuBar(false)
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link className="navbar-logo" to="/" onClick={closeMobileMenuBar}>
                        <img className="navbar-image" src="./assets/logo/ubisoft-logo.jpeg" alt="..." />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}> 
                        <i className={menuBar ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div> 
                    <ul className={menuBar ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item"><Link to="/" className='nav-links' onClick={closeMobileMenuBar}><b>Play</b></Link></li>
                        <li className="nav-item"><Link to="/" className='nav-links' onClick={closeMobileMenuBar}><b>Shop</b></Link></li>
                        <li className="nav-item"><Link to="/" className='nav-links' onClick={closeMobileMenuBar}><b>Explore</b></Link></li>
                        <li className="nav-item"><Link to="/" className='nav-links' onClick={closeMobileMenuBar}><b>Help</b></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu
