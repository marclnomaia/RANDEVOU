


import { Grid } from '@mui/material';
import './App.css';
//import RandNavBar from './components/NavBar/RandNavBar';
import RandProfile from './components/Profile/RandProfile';
//import RandRating from './components/Sidebar/RandRating';
//import RandTaskBar from './components/Taskbar/RandTaskBar';
//import { blue } from '@mui/material/colors';
import RandInfo from './components/Personal_Info/RandInfo';
//import { RandInfo } from './components/Personal_Info/RandInfo';


//import NavBar from './components/GridEx/NavBar';
//import Bar from './components/GridEx/Bar';
//import TaskBar from './components/GridEx/TaskBar';
//import Profile from './components/GridEx/profile';
//import RandNav from './components/GridEx/RandNav';
//import { GridTest1 } from './components/GridTest1';
//import { GridScratch } from './components/GridEx/GridScratch';

function App() {
  return (
    <div>
      {/*} <div className="App">

      <RandNavBar />
      <RandProfile />
      <RandRating />
      <RandTaskBar />
      
      <Profile />
      <TaskBar />
       <RandNavBar />
      <GridTest1 />
      <GridScratch />
      <Bar />
      <NavBar />
  </div>*/}

      <Grid container>
        <Grid item xs={12} >

        </Grid>
        <Grid container>
        </Grid>
        <Grid item xs={12} sm={2} md={3} lg={3}>
          <RandProfile />
        </Grid>
        <Grid item xs={12} sm={2} md={4} lg={6}>
          <RandInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>

        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>

        </Grid>

      </Grid>

    </div >





  );
}

export default App;
