import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {
  Typography, List, ListItem,
  Grid, ListItemIcon
} from '@mui/material';

const RandInfo: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* User Info Column (8 out of 12) */}
      <Grid container item xs={8}
        sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-start', alignItems: 'flex-start',
          textAlign: 'left',
          width: '100%',
          mt: 7
        }}
      >
        <List>
          <ListItem disablePadding>
            <Typography variant="h6" component="div"
              sx={{
                fontWeight: 'bold', fontSize: 25
              }}>
              Marcilino da Maia
            </Typography>

            <ListItemIcon
              sx={{
                minWidth: 'unset',
                fontSize: 8,
              }}>
              <LocationOnIcon fontSize="inherit" />
            </ListItemIcon>
          </ListItem>
        </List>

        <Typography variant="subtitle1" color="text.secondary"
          sx={{
            fontWeight: 'bold', fontSize: 8
          }}
        >
          New York, NY
        </Typography>

        <Typography variant="subtitle2"
          sx={{
            fontSize: 12, color: '#007FFF',
            fontWeight: 'bold'
          }}
        >
          Junior Programmer
        </Typography>

        <Typography variant="subtitle1"
          sx={{
            fontSize: 12, color: '#ccc',
            fontWeight: 'bold'
          }}
        >
          Rankings
        </Typography>
      </Grid>
      {/* Empty Space (3 out of 12) */}
      <Grid item xs={3}>
      </Grid>

      {/* Bookmark Column (1 out of 12) */}
      <Grid item xs={1}
        sx={{
          display: 'flex', flexDirection: 'row', // Changed to row
          alignItems: 'center', // Aligns items to the center vertically
          justifyContent: 'flex-end', // Aligns items to the end horizontally
          mt: 10,
          color: 'lightgray'
        }}
      >
        <BookmarkIcon sx={{ fontSize: 16 }} />
        <Typography variant="body2"
          sx={{
            fontSize: 16,
            padding: 1,
            textAlign: 'right', // Aligns text to the right
            ml: 1,

            flexDirection: 'row' // Adds left margin for spacing
          }}
        >
          Bookmark
        </Typography>
      </Grid>
    </Grid>
  );
}
export default RandInfo;
