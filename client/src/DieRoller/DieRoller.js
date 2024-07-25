import './DieRoller.css'
import { useState } from 'react';
import FaceOne from './DieFaces/FaceOne.js'
import FaceTwo from './DieFaces/FaceTwo.js';
import FaceThree from './DieFaces/FaceThree.js';
import FaceFour from './DieFaces/FaceFour.js'
import FaceFive from './DieFaces/FaceFive.js';
import FaceSix from './DieFaces/FaceSix.js';



function DieRoller() {
    const [die_num, set_die_num] = useState(1);//useState(Math.floor(Math.random() * 6)+1);
    const faces=[FaceOne, FaceTwo, FaceThree, FaceFour, FaceFive, FaceSix];
    let currFace=faces[die_num];

    const onRoll = () => {
        set_die_num(Math.floor(Math.random()*6)+1);
        currFace=faces[die_num];
    }

    console.log(die_num);

    console.log(currFace);

    return(
        <div className='die-outer'>
            <div className='die-inner' onClick={onRoll}>
            
            </div>
            <p>{die_num}</p>
            
        </div>
    );
}

export default DieRoller