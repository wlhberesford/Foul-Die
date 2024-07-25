import '../DieRoller.css'
import Dot from './Dot.js'

function FaceFive(){
    return(
        <div className='die-face-five'>
            <Dot /><div className='empty-dot'/><Dot />

            <div className='empty-dot'/><Dot /><div className='empty-dot'/>
            
            <Dot /><div className='empty-dot'/><Dot />
        </div>

    );
}

export default FaceFive