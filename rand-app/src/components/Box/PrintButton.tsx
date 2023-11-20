import { useState } from 'react';
import { Button, Grid, Box } from '@mui/material';
import { useData } from '../Box/useData';

function PrintButton() {
  const { data } = useData();
  const [showInfoBox, setShowInfoBox] = useState(false);
  const handlePrintData = () => {
    setShowInfoBox(!showInfoBox);
    if (showInfoBox === false) {
      console.log(data);
    }
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      style={{ minHeight: '100vh', paddingTop: '10px' }}
    >
      <Grid item>
        <Button variant="contained" onClick={handlePrintData}>
          Print Data
        </Button>
      </Grid>
      {/* Display the information if showInfoBox is true */}
      {showInfoBox && (
        <Grid item>
          <Box
            sx={{
              marginTop: '1rem',
              padding: '1rem',
              border: '1px solid black',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <div>Date: {data.date}</div>
            <div>Text: {data.text}</div>

          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default PrintButton;




