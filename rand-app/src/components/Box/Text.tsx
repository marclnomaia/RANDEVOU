import React, { useState } from 'react';
import { Grid, Box, TextField } from '@mui/material';

function Text() {
  const [text, setText] = useState('');

  const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    // When the user clicks outside the field, you can perform the necessary action with the text.

    console.log('Saved text:', text);

    // Clear the text field after saving the value.
    setText('');
  };

  // This method will prevent the form from being submitted when the "Enter" key is pressed.
  const handleKeyDown = (event: { key: string; shiftKey: any; preventDefault: () => void; }) => {
    if (event.key === 'Enter') {
      if (!event.shiftKey) {
        event.preventDefault();
        // Add any additional action you want to execute
      }
    }
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
          backgroundColor: 'lightBlue',
          width: '100%'
        }}>
          <TextField
            fullWidth
            label="Type a text here"
            variant="outlined"
            value={text}
            onChange={handleTextChange}
            onBlur={handleBlur}
            multiline
            rows={1}
            onKeyDown={handleKeyDown} // prevents "Enter" from submitting the form
          />
        </Box>
      </Grid>
    </Grid>

  );
}

export default Text;



