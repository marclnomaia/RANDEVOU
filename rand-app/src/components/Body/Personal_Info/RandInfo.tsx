import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography, Grid, ListItemIcon, Box, Rating } from '@mui/material';

const RandInfo: React.FC = () => {

  const [value, setValue] = useState<number | null>(8.4 / 2); // initial value 

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  return (

    <Grid container spacing={0} padding={3} display="flex" justifyContent="start-end">
      <Grid item xs={12} sm={3} md={12}>
        <Box sx={{
          bgcolor: 'lightBlue',
          width: '100%',
          mt: 1,
          height: { xs: '5vh', md: '12vh', lg: '20vh' }
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

        {/*Rating info*/}

        <Box
          sx={{
            bgcolor: 'lightBlue',
            width: '100%',
            mt: 0,
            height: { xs: '5vh', md: '12vh', lg: '20vh' },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left', // centraliza verticalmente

            marginTop: -10
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              fontSize: 17,
              mr: 2 // Espaçamento entre o Typography e o Rating
            }}
          >
            8.6
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={handleChange}
            precision={0.5}
            sx={{ color: '#007FFF', fontSize: 15 }}
          />
        </Box>
      </Grid>
    </Grid>




  );
};

export default RandInfo;
