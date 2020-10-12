import React from 'react';
import logo from './assets/logo.png'
import './custom.css'

const Navbar = () => {
    return (
        <div>
        <nav class="navbr  navbar-light navbg">
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand navbr" href="#">
                <img src={logo} width="55" height="26" alt="" loading="lazy"/>
                <a class="navbar-brand brandName" href="#">Feba</a>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    
                </ul>
                
            </div>
            

        </nav>
        <hr/>
        </div>
    );
}

export default Navbar;