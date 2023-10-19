import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function Number() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: { preventDefault?: any; key?: any; }) => {
    const { key } = event;

    if (key === 'Enter') {
      event.preventDefault();

      console.log('Number saved:', inputValue);

      setInputValue('');
    }
  };

  // Function to clear the input field.
  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              type="number"
              label="Enter a number"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {/* button to clear the input field */}
            {inputValue && (
              <IconButton
                aria-label="clear"
                onClick={handleClearInput}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                }}
              >
                <ClearIcon />
              </IconButton>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

