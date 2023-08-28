


import './App.css';
import RandNavBar from './components/NavBar/RandNavBar';
import RandProfile from './components/Profile/RandProfile';
import RandRating from './components/Sidebar/RandRating';
import RandTaskBar from './components/Taskbar/RandTaskBar';


//import NavBar from './components/GridEx/NavBar';
//import Bar from './components/GridEx/Bar';
//import TaskBar from './components/GridEx/TaskBar';
//import Profile from './components/GridEx/profile';
//import RandNav from './components/GridEx/RandNav';
//import { GridTest1 } from './components/GridTest1';
//import { GridScratch } from './components/GridEx/GridScratch';

function App() {
  return (
    <div className="App">

      <RandNavBar />
      <RandProfile />
      <RandRating />
      <RandTaskBar />
      {/*}
      <Profile />
      <TaskBar />
       <RandNavBar />
      <GridTest1 />
      <GridScratch />
      <Bar />
      <NavBar />*/}

    </div>


  );
}

export default App;
