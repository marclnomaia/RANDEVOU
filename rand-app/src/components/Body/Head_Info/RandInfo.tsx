import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography, Grid, ListItemIcon, useTheme, Box, Rating, useMediaQuery } from '@mui/material';

const RandInfo: React.FC = () => {

  const [value, setValue] = useState<number | null>(8.4 / 2); // initial value 

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (

    <Grid container spacing={0} padding={3} display="flex" justifyContent="start-end">
      <Grid item xs={12} sm={3} md={12}>
        <Box sx={{
          bgcolor: 'white',
          width: '100%',
          mt: isMobile ? 0 : 0,
          height: { xs: '5vh', md: '12vh', lg: '20vh' }
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div"
              sx={{
                fontWeight: 'bold',
                fontSize: isMobile ? 14 : 25
              }}>
              Marcilino da Maia
            </Typography>
            <ListItemIcon
              sx={{
                minWidth: 'unset',
                fontSize: isMobile ? 8 : 8,
                ml: 1
              }}>
              <LocationOnIcon fontSize="inherit" />
            </ListItemIcon>
            <Typography variant="subtitle1" color="text.secondary"
              sx={{
                fontWeight: 'bold',
                fontSize: 8,
                ml: 1
              }}>
              New York, NY
            </Typography>
          </div>
          <Typography variant="subtitle2"
            sx={{
              fontSize: isMobile ? 8 : 12,
              color: '#007FFF',
              fontWeight: 'bold'
            }}>
            Junior Programmer
          </Typography>
          <Typography variant="subtitle1"
            sx={{
              fontSize: isMobile ? 9 : 12,
              color: '#ccc',
              fontWeight: 'bold',
              mt: isMobile ? 1 : 2
            }}>
            Rankings
          </Typography>
          {/* Bookmark */}
          <Typography
            variant="body2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              fontSize: isMobile ? 9 : 12,
              color: 'lightgrey',
              mr: isMobile ? 1 : 8,
              mt: isMobile ? -7 : -10
            }}>
            <BookmarkIcon
              sx={{
                fontSize: 16,
                color: 'lightgrey',
                marginRight: 1
              }} />
            Bookmark
          </Typography>
        </Box>
        {/*Ranking info*/}
        <Box
          sx={{
            width: '100%',
            fontSize: 16,
            height: { xs: '5vh', md: '12vh', lg: '20vh' },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left',
            marginTop: isMobile ? 3 : -6
          }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              fontSize: isMobile ? 9 : 18,
              mr: 1
            }}>
            8.6
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={handleChange}
            precision={0.5}
            sx={{ color: '#007FFF', fontSize: isMobile ? 9 : 20 }}
          />
        </Box>
      </Grid>
    </Grid >
  );
};

export default RandInfo;
