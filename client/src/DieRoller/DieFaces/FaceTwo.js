import '../DieRoller.css'
import Dot from './Dot.js'

function FaceTwo(){
    return(
        <div className='die-face-two'>
            <div className='empty-dot'/><div className='empty-dot'/><Dot />

            <div className='empty-dot'/><div className='empty-dot'/><div className='empty-dot'/>
            
            <Dot />
        </div>

    );
}

export default FaceTwo