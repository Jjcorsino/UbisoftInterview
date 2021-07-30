import React from 'react'
import './Menu.page.scss'
export default function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand menu-logo"  href="#">
                        <img className="full-logo img-fluid" src="./assets/logo/ubisoft-logo.jpeg" />
                    </a>

                    <div className=" navbar-collapse collapse" id="navbarTogglerDemo03">
                    <ul class="nav navbar-nav navbar-center">
                        <li className="menu-link"><a href="#">Uplay+</a></li>
                        <li className="menu-link"><a href="#">Store</a></li>
                        <li className="menu-link"><a href="#">More Games</a></li>
                        <li className="menu-link"><a href="#">News</a></li>
                        <li className="menu-link"><a href="#">Forums</a></li>
                        <li className="menu-link"><a href="#">Support</a></li>
                         
                    </ul>
                                    
                    </div>

                    
                </div>
            </nav>
        </div>
    )
}
