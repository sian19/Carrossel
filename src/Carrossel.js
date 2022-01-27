import React from 'react';

import './styles/global.css'

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function Carrossel() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Carrossel;