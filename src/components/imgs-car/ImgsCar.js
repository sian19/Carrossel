import React, { useEffect, useState } from 'react';

import './imgs-car.css';

import img1 from '../../assets/london.png';
import img2 from '../../assets/que-del-retiro-2-1920x1080-1-960x540.png';
import img3 from '../../assets/_Copacabana_-_Rio_de_Janeiro,_Brasil .png';
import img4 from '../../assets/salvador-banner-mobile-1024x553.png';
import img5 from '../../assets/Torre-Eiffel-na-Franca.png';

function ImgsCar(props) {

    const [slide1, setSlide1] = useState(0);
    const [slide2, setSlide2] = useState(0);
    const [slide3, setSlide3] = useState(-100);
    const [slide4, setSlide4] = useState(-200);
    const [slide5, setSlide5] = useState(-300);



    useEffect(() => {
        let count = props.count;
        let back = props.back;

        if (count == 1 && !back) {
            setSlide1(-100);
            setSlide2(-count * 100);
        }

        else if (count == 2 && !back) {
            setSlide2(-200);
            setSlide3(-count * 100);
        }

        else if (count == 3 && !back) {
            setSlide3(-300);
            setSlide4(-count * 100);
        }

        else if (count == 4 && !back) {
            setSlide4(-400);
            setSlide5(-count * 100);
        }

        else if (count == 0 && back) {
            setSlide5(-300);
            setSlide4(-200);
            setSlide3(-100);
            setSlide2(0);
            setSlide1(0);

        }

        /* Abaixo o código do retorno das imagens do carrossel */

        else if (count == 0 && back) {
            setSlide2(0);
            setSlide1(0);
        }

        else if (count == 1 && back) {
            setSlide3(-100);
            setSlide2(-100);
        }

        else if (count == 2 && back) {
            setSlide4(-200);
            setSlide3(-200);
        }

        else if (count == 3 && back) {
            setSlide5(-300);
            setSlide4(-300);
        }

        else if (count >= 4 && back) {
            setSlide1(-100);
            setSlide2(-200);
            setSlide3(-300);
            setSlide4(-400);
            setSlide5(-400);
        }

    }, [props.count, props.back])

    return (
        <div className='carrossel'>
            <img src={img1} alt="one" style={{
                transform: `translateX(${slide1}%)`
            }} />
            <img src={img2} alt="two" style={{
                transform: `translateX(${slide2}%)`
            }} />
            <img src={img3} alt="three" style={{
                transform: `translateX(${slide3}%)`
            }} />
            <img src={img4} alt="four" style={{
                transform: `translateX(${slide4}%)`
            }} />
            <img src={img5} alt="five" style={
                {
                    transform: `translateX(${slide5}%)`
                }
            } />
        </div>
    )
}

export default ImgsCar;