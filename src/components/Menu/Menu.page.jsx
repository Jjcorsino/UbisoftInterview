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
                    <a className="menu-logo"  href="/">
                        <img className="navbar-brand d-none d-sm-none  d-md-block full-logo img-fluid" src="./assets/logo/ubisoft-logo.jpeg" alt="..." />
                        <img className="center d-xs-block d-sm-block d-md-none small-logo img-fluid" src="./assets/logo/ubisoft-logo-small.jpeg" alt="..." />
                    </a>

                    <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
                        <ul class="  nav navbar-nav navbar-center bg-dark ">
                            <li className="menu-link"><a href="/">Uplay+</a></li>
                            <li className="menu-link"><a href="/">Store</a></li>
                            <li className="menu-link"><a href="/">More Games</a></li>
                            <li className="menu-link"><a href="/">News</a></li>
                            <li className="menu-link"><a href="/">Forums</a></li>
                            <li className="menu-link"><a href="/">Support</a></li>
                            
                        </ul>
                                    
                    </div>

                    
                </div>
            </nav>
        </div>
    )
}


{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand menu-logo"  href="/">
                        <img className="full-logo img-fluid" src="./assets/logo/ubisoft-logo.jpeg" alt="..." />
                    </a>

                    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul class="nav navbar-nav navbar-center">
                            <li className="menu-link"><a href="/">Uplay+</a></li>
                            <li className="menu-link"><a href="/">Store</a></li>
                            <li className="menu-link"><a href="/">More Games</a></li>
                            <li className="menu-link"><a href="/">News</a></li>
                            <li className="menu-link"><a href="/">Forums</a></li>
                            <li className="menu-link"><a href="/">Support</a></li>
                            
                        </ul>
                                    
                    </div>

                    
                </div>
            </nav> */}