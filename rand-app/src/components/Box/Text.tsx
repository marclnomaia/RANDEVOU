import React, { useState } from 'react';
import { Grid, Box, TextField } from '@mui/material';

function FormBox() {
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
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormBox;



