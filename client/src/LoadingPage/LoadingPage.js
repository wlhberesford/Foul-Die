import './LoadingPage.css'
import React,{ useEffect, useState } from 'react';
import FaceOne from '../DieRoller/DieFaces/FaceOne.js'
import FaceTwo from '../DieRoller/DieFaces/FaceTwo.js';
import FaceThree from '../DieRoller/DieFaces/FaceThree.js';
import FaceFour from '../DieRoller/DieFaces/FaceFour.js'
import FaceFive from '../DieRoller/DieFaces/FaceFive.js';
import FaceSix from '../DieRoller/DieFaces/FaceSix.js';



function LoadingPage() {
    const faces=[FaceOne, FaceTwo, FaceThree, FaceFour, FaceFive, FaceSix];

    const [die_num, setDieNum] = useState(Math.floor(Math.random() * 6)+1);
    const [die_face, setDieFace] = useState(faces[die_num-1]);
    const [loadingText,setLoadingText] = useState("Loading.");

    
    
    useEffect(() => {
        let new_num=die_num+1;
        let new_text="Loading";
        if(new_num===7){
            new_num=1;
        }
        setTimeout(() =>{
            setDieNum(new_num);
            setDieFace(faces[new_num-1]);

            for(var i=0;i<(new_num-1)%3+1;++i){
                new_text+=".";
            }
            setLoadingText(new_text);
        },"500");
    });

    return(
        <div className='loading-die-outer'>
            <div className='loading-die-inner'>           
                {die_face}
                <h1 className='loading-text'>{loadingText}</h1>
            </div>
            
        </div>
    );
}

export default LoadingPage