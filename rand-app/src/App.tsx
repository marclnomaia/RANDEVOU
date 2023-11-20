import './App.css';
//import RandNavBar from './components/Header/RandNavBar';
//import RandExperience from './components/Body/Profile/RandExperience';
//import RandTaskBar from './components/Body/Personal_Information/RandTaskBar';
//import RandInfo from './components/Body/Head_Info/RandInfo';
//import Text from './components/Box/Text';
//import Number from './components/Box/Number';
//import Date from './components/Box/Date';
import { Box, Grid, Table } from '@mui/material';
import { useEffect } from 'react';
import Forms from './components/Box/Forms';
//import PrintButton from './components/Box/PrintButton';
//import { DataProvider } from './components/Box/useData';




function App() {
  useEffect(() => {
    document.title = "Randevou";
  }, []);


  return (
    <div>

      <Grid container spacing={1} xs={12} sm={9} md={12}>
        {/*<Grid item xs={12} sm={3} md={12}>
          <Box>
            <RandNavBar />
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} md={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box>
                <RandExperience />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box>
                <RandInfo />
              </Box>*/}

        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Forms />
          </Box>
        </Grid>
      </Grid>



    </div >

  );
}

export default App;
