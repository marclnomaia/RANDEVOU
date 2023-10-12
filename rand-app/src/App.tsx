import './App.css';
import RandNavBar from './components/Header/RandNavBar';
import RandExperience from './components/Body/Profile/RandExperience';
import RandTaskBar from './components/Body/Personal_Information/RandTaskBar';
import RandInfo from './components/Body/Head_Info/RandInfo';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Randevou";
  }, []);

  return (
    <div>

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
                </Box>
                <Grid item xs={12}>
                  <Box>
                    <RandTaskBar />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >





  );
}

export default App;
