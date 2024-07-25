import '../DieRoller.css'
import Dot from './Dot.js'

function FaceOne(){
    return(
        <div className='die-face-one'>
            <div className='empty-dot'/><div className='empty-dot'/><div className='empty-dot'/>
            <div className='empty-dot'/><Dot/><div className='empty-dot'/>
            <div className='empty-dot'/><div className='empty-dot'/><div className='empty-dot'/>
        </div>

    );
}

export default FaceOne