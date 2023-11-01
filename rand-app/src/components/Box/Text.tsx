import React, { useState } from 'react';
import { TextField, Box, IconButton, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useData } from '../Box/useData';


function Text() {
  const { setData } = useData();
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setData((prevData: any) => ({ ...prevData, text: inputValue }));
      setInputValue('');
    }
  };

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
              label="Enter text"
              variant="outlined"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
                  right: '40px',
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
export default Text;



