import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography, Grid, ListItemIcon, Box } from '@mui/material';

const RandInfo: React.FC = () => {
  return (

    <Grid container spacing={0} padding={3} display="flex" justifyContent="start-end">
      <Grid item xs={12} sm={3} md={12}>
        <Box sx={{
          bgcolor: 'lightBlue',
          width: '100%',
          mt: 1,
          height: { xs: '25vh', md: '77vh' }
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: 25 }}>
              Marcilino da Maia
            </Typography>
            <ListItemIcon sx={{ minWidth: 'unset', fontSize: 8, ml: 1 }}>
              <LocationOnIcon fontSize="inherit" />
            </ListItemIcon>
            <Typography variant="subtitle1" color="text.secondary"
              sx={{
                fontWeight: 'bold',
                fontSize: 8,
                ml: 1
              }}
            >
              New York, NY
            </Typography>
          </div>

          <Typography variant="subtitle2"
            sx={{
              fontSize: 12,
              color: '#007FFF',
              fontWeight: 'bold'
            }}
          >
            Junior Programmer
          </Typography>

          <Typography variant="subtitle1"
            sx={{
              fontSize: 12,
              color: '#ccc',
              fontWeight: 'bold',
              mt: 2
            }}
          >
            Rankings
          </Typography>


          {/* Bookmark */}

          <BookmarkIcon
            sx={{
              fontSize: 16

            }} />
          <Typography variant="body2"
            sx={{
              fontSize: 16,
              padding: 1,
              textAlign: 'right',

            }}
          >
            Bookmark
          </Typography>
        </Box>
      </Grid>
    </Grid>




  );
};

export default RandInfo;
