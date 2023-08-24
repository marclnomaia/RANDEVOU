import React, { useState } from 'react';
import { Grid, Stack, Rating, Typography, useTheme, useMediaQuery } from '@mui/material';

const RandRating: React.FC = () => {
  const [value, setValue] = useState<number | null>(8.4 / 2); // initial value 

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: '10px',

        }}>
          <Stack spacing={1} direction="row" sx={{
            ml: isMobile ? 15.2 : 22,
            mt: isMobile ? -2.5 : -5
          }}>
            <Typography variant="body1" sx={{
              fontWeight: 'bold',
              fontSize: isMobile ? 9 : 17,
            }}
            >8.6
            </Typography>
            <Rating name="simple-controlled" value={value} onChange={handleChange}
              precision={0.5}
              sx={{ color: '#007FFF', fontSize: isMobile ? 9 : 15 }} />
          </Stack>
        </div>
      </Grid>
    </Grid>
  );
}
export default RandRating;
