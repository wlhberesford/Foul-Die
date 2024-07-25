import '../DieRoller.css'
import Dot from './Dot.js'

function FaceThree(){
    return(
        <div className='die-face-three'>
            <div className='empty-dot'/><div className='empty-dot'/><Dot />

            <div className='empty-dot'/><Dot/><div className='empty-dot'/>
            
            <Dot />
        </div>

    );
}

export default FaceThree