import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import './places.css';

function Places(props) {

    const [text, setText] = useState('');

    useEffect(() => {
        let count = props.count;

        if (count == 1) {
            setText('Madri-Spain');
        }

        else if (count == 2) {
            setText('Copacabana-Brazil');
        }

        else if (count == 3) {
            setText('Salvador-Brazil');
        }

        else if (count == 4) {
            setText('Paris-France');
        }

        else {
            setText('London-England');
        }

    }, [props.count])

    return (
        <div className='places'>{text}</div>
    )
}

export default Places;