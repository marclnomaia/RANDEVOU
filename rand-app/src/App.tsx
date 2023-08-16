


import './App.css';
//import Bar from './components/GridEx/Bar';
//import TaskBar from './components/GridEx/TaskBar';
//import Profile from './components/GridEx/profile';

import RandNav from './components/GridEx/RandNav';
import RandBar from './components/NavBar/RandBar';
import RandProfile from './components/Profile/RandProfile';
import { RandRating } from './components/Sidebar/RandRating';
import RandTaskBar from './components/Taskbar/RandTaskBar';
//import { GridTest1 } from './components/GridTest1';
//import { GridScratch } from './components/GridEx/GridScratch';





function App() {
  return (
    <div className="App">
      {/* 
      <Profile />
      <TaskBar />
       <RandNav />
      <GridTest1 />
      <GridScratch />
      <Bar />*/}
      <RandBar />

      <RandProfile />
      <RandRating />
      <RandTaskBar />

    </div>
  );
}

export default App;
