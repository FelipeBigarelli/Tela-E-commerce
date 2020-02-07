import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i>Início
            </a>
            <a href="#/Produtos">
                <i className="fa fa-dollar"></i>Nossos Produtos
            </a>
            <a href="#/Contato">
                <i className="fa fa-phone"></i>Fale Conosco
            </a>
        </nav>
    </aside>

// menu na esquerda na direita a navegacao que esta log no meio (ou embaixo)