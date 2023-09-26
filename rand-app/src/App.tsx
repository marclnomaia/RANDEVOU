


//import { Grid } from '@mui/material';
import './App.css';
import RandNavBar from './components/Header/RandNavBar';
import RandProfile from './components/Body/Profile/RandProfile';
//import RandRating from './components/Sidebar/RandRating';
import RandTaskBar from './components/Body/Taskbar/RandTaskBar';
//import { blue } from '@mui/material/colors';
import RandInfo from './components/Body/Personal_Info/RandInfo';
//import { GridTest1 } from './components/GridEx/GridTest1';
//import { GridScratch } from './components/GridEx/GridScratch';
import { Box, Grid } from '@mui/material';
import RandRating from './components/Body/ExtraInfo/RandRating';
//import { RandInfo } from './components/Personal_Info/RandInfo';


//import NavBar from './components/GridEx/NavBar';
//import Bar from './components/GridEx/Bar';
//import TaskBar from './components/GridEx/TaskBar';
//import Profile from './components/GridEx/profile';
//import RandNav from './components/GridEx/RandNav';

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
      {/*}
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4} lg={4} >
          <RandProfile />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <RandInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <RandTaskBar />
        </Grid>
      </Grid>


      <RandProfile />

      <RandTaskBar />

      <RandInfo />
*/}

      <Grid item xs={12} sm={9} md={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} md={12}>
            <Box>
              <RandNavBar />
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box>
                  <RandProfile />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box>
                  <RandInfo />


                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>



    </div >





  );
}

export default App;
