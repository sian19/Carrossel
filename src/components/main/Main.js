import React, { useState } from 'react';

import './main.css'

import ImgsCar from '../imgs-car/ImgsCar';
import Span from '../span/Span';

import ButtonMob from '../button-mobile/ButtonMob';
import Places from '../places/Places';

function Main() {

    const [count, setCount] = useState(0);
    const [back, setBack] = useState(false);

    function front() {

        setBack(false);
        setCount(count => count + 1);

        if (count >= 4) {
            setBack(true);
            setCount(0);
        }

    }

    function behind() {
        setBack(true);
        setCount(count => count - 1);


        if (count <= 0) {
            setCount(4);
        }
    }

    return (
        <main>

            <div className='center'>

                <Places count={count} />

                <div className='button left' onClick={behind}>
                    <section></section>
                </div>

                <Span />

                <ImgsCar count={count} back={back} />

                <Span />

                <div className='button right' onClick={front}>
                    <section></section>
                </div>

                <ButtonMob front={front} behind={behind} />



            </div>
        </main>

    )
}

export default Main;