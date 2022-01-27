import React from 'react';

import imgLeft from '../../img/seta-esquerda.svg';
import imgRight from '../../img/seta-direita.svg'

import './button-mob.css';

function ButtonMob(props) {

    function left() {
        props.behind()
    }

    function right() {
        props.front()
    }

    return (
        <div className='button-mob'>
            <button><img src={imgLeft} alt="left" onClick={left} /></button>
            <button><img src={imgRight} alt="right" onClick={right} /></button>
        </div>
    )
}

export default ButtonMob;