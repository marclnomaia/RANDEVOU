import { Box, Grid } from '@mui/material'
//import React from 'react'

export const GridTest1 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3} md={3}>
        <Box sx={{
          bgcolor: 'green',
          width: '100%',
          height: { xs: 'auto', md: '100vh' }
        }}> item1 </Box>
      </Grid>
      <Grid item xs={12} sm={9} md={9}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{
              bgcolor: 'red',
              width: '100%',
              height: { xs: 'auto', md: '22.5vh' }
            }} > item2 </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{
              bgcolor: 'lightBlue',
              width: '100%',
              height: { xs: 'auto', md: '75vh' }
            }} > item3 </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
