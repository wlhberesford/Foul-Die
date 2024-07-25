import './RollScreen.css';
import Header from '../Header/Header.js'
import DieRoller from '../DieRoller/DieRoller.js';



function RollScreen() {
  return (
    <div className="RollScreen">
      <Header />
      <DieRoller />

    </div>
  );
}

export default RollScreen;