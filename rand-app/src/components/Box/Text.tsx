import * as React from 'react';
import { TextareaAutosize } from '@mui/base';
import { styled } from '@mui/system';
import { blue, grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

function Text() {


  const Textarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );



  return (
    <Grid container spacing={3} direction="column" alignItems="center" >
      <Grid item xs={12} sm={6} md={4}
        style={{ minHeight: '100vh' }}>
        <Textarea aria-label="empty textarea" placeholder="Empty" />
      </Grid>
    </Grid>
  );
};
export default Text;