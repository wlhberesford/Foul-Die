import './DieRoller.css'
import React,{ useState } from 'react';
import FaceOne from './DieFaces/FaceOne.js'
import FaceTwo from './DieFaces/FaceTwo.js';
import FaceThree from './DieFaces/FaceThree.js';
import FaceFour from './DieFaces/FaceFour.js'
import FaceFive from './DieFaces/FaceFive.js';
import FaceSix from './DieFaces/FaceSix.js';



function DieRoller() {
    const faces=[FaceOne, FaceTwo, FaceThree, FaceFour, FaceFive, FaceSix];

    const [die_num, setDieNum] = useState(Math.floor(Math.random() * 6)+1);
    const [die_face, setDieFace] = useState(faces[die_num-1]);
    
    const onRoll = () => {
        let new_num=Math.floor(Math.random()*6)+1;
        setDieNum(new_num);
        setDieFace(faces[new_num-1]);
    }

    return(
        <div className='die-outer'>
            <div className='die-inner' onClick={onRoll}>           
                {die_face}
            </div>
            <p>{die_num}</p>
            
        </div>
    );
}

export default DieRoller