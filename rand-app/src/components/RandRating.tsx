import React, { useState } from 'react'
import { Stack, Rating, Typography } from '@mui/material'

export const RandRating = () => {
  const [value, setValue] = useState<number | null>(8.6 / 2) // initial value set to 8.6 / 2 = 4.3

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      paddingTop: '10px',
      marginLeft:'100',
      
    }}>
      <Stack spacing={2} direction="row" sx={{ml:75, mt:-2}}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 20 }}>8.6</Typography>
        <Rating name="simple-controlled" value={value} onChange={handleChange} precision={2} sx={{ color: '#007FFF' }} />
      </Stack>
    </div>
  )
}
