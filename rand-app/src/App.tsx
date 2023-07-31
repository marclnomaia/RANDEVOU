
//import { AppBar } from '@mui/material';
import './App.css';
import RandBar from './components/RandBar';
import RandProfile from './components/RandProfile';
import { RandRating } from './components/RandRating';
import RandTaskBar from './components/RandTaskBar';
//import RandTimeline from './components/RandTimeline';



function App() {
  return (
    <div className="App">
      <RandBar/>
      <RandProfile/>
      <RandRating/>
      <RandTaskBar/>
      
    </div>
  );
}

export default App;
