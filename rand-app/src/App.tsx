

import './App.css';
import RandBar from './components/NavBar/RandBar';
import RandProfile from './components/Profile/RandProfile';
import { RandRating } from './components/Sidebar/RandRating';
import RandTaskBar from './components/Taskbar/RandTaskBar';
//import { GridTest1 } from './components/GridTest1';
//import { GridScratch } from './components/GridEx/GridScratch';





function App() {
  return (
    <div className="App">
      <RandBar />
      <RandProfile />
      <RandRating />
      <RandTaskBar />
      {/*<GridTest1 />
      <GridScratch />*/}



    </div>
  );
}

export default App;
