import './DieRoller.css'
import { useState } from 'react';
import FaceOne from './DieFaces/FaceOne.js'



function DieRoller() {
    const [die_num, set_die_num] = useState(1);//useState(Math.floor(Math.random() * 6)+1);

    const onRoll = () => {
        set_die_num(Math.floor(Math.random()*6)+1);
    }

    return(
        <div className='die-outer'>
            <div className='die-inner' onClick={onRoll}>
                <FaceOne />
            </div>
            <p>{die_num}</p>
        </div>
    );
}

export default DieRoller