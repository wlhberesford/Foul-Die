import '../DieRoller.css'
import Dot from './Dot.js'

function FaceFour(){
    return(
        <div className='die-face-four'>
            <Dot /><div className='empty-dot'/><Dot />

            <div className='empty-dot'/><div className='empty-dot'/><div className='empty-dot'/>
            
            <Dot /><div className='empty-dot'/><Dot />
        </div>

    );
}

export default FaceFour