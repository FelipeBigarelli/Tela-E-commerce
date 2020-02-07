import './Logo.css'
import logo from '../../assets/imgs/fb-logo-white.png'
import React from 'react'

import Header from './Header'
import Nav from './Nav'

export default props =>
    <React.Fragment>
    <aside className="logo">
        <Nav />
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
        <Header />
    </aside>
    </React.Fragment>
    