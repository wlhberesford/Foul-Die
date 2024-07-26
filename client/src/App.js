import './App.css';
import LandingPage from './LandingPage/LandingPage'
import RollScreen from './RollScreen/RollScreen';
//import LoadingPage from './LoadingPage/LoadingPage';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path='roll' element={<RollScreen/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
