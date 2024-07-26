import './RollScreen.css';
import Header from '../Header/Header.js'
import DieRoller from '../DieRoller/DieRoller.js';
import PartyFeed from '../PartyFeed/PartyFeed.js';



function RollScreen() {
  return (
    <div className="RollScreen">
      <Header />
      <DieRoller />
      <h2 className="party-feed-title">Party Feed</h2>
      <PartyFeed/>

    </div>
  );
}

export default RollScreen;