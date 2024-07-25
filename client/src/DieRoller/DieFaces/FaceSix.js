import '../DieRoller.css'
import Dot from './Dot.js'

function FaceSix(){
    return(
        <div className='die-face-six'>
            <Dot /><div className='empty-dot'/><Dot />

            <Dot /><div className='empty-dot'/><Dot />
            
            <Dot /><div className='empty-dot'/><Dot />
        </div>

    );
}

export default FaceSix