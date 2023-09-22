import { Box, Grid } from '@mui/material'
//import React from 'react'

export const GridScratch = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={3} md={12}>
        <Box sx={{

          fontFamily: 'Helvetica, Arial, sans-serif',
          fontSize: '14',
          bgcolor: 'green',
          width: '100%',
          height: { xs: 'auto', md: '10vh' }
        }}>
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={4}>
            <Box sx={{
              bgcolor: 'red',
              width: '100%',
              height: { xs: 'auto', md: '90vh' }
            }} >
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{
              bgcolor: 'lightBlue',
              width: '100%',
              height: { xs: 'auto', md: '90vh' }
            }} >
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
