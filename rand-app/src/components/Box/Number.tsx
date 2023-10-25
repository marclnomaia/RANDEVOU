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
    <Grid container spacing={2} padding={3}>
      <Grid item xs={12} sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'lightgrey',
        padding: 1,
        marginTop: '15px'


      }}>
        <Box sx={{
          flexGrow: 1,
          margin: 2,
          backgroundColor: 'lightBlue'
        }}>
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
        </Box>
      </Grid>
    </Grid>

  );
}

