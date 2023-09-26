import React, { useState } from 'react';
import { Grid, Stack, Rating, Typography, useTheme, useMediaQuery, Box } from '@mui/material';

const RandRating: React.FC = () => {
  const [value, setValue] = useState<number | null>(8.4 / 2); // initial value 

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container padding={3} display="flex" >
      <Grid item xs={12} sm={3} md={12}>
        <Box
          sx={{
            bgcolor: 'lightBlue',
            width: '100%',
            mt: 0,
            height: { xs: '5vh', md: '12vh', lg: '20vh' },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left', // centraliza verticalmente

            marginTop: isMobile ? -2.5 : -10
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              fontSize: isMobile ? 9 : 17,
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
            sx={{ color: '#007FFF', fontSize: isMobile ? 9 : 15 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
export default RandRating;
