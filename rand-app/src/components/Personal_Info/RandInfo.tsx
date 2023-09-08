import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {
  Typography, List, ListItem,
  Grid, ListItemIcon
} from '@mui/material';

const RandInfo: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'left' }}>
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={3} md={3} lg={8}
          sx={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'left', alignItems: 'left',
            textAlign: 'left',
            width: '100%',
            mt: 8
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

        {/* Left Aligned Items */}
        <Grid item xs={12} sm={2} md={3} lg={6}
          sx={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', // left align
          }}
        >
          <BookmarkIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2"
            sx={{
              fontSize: 16,
              padding: 1  // Fixed typo from 'adding' to 'padding'
            }}
          >
            Bookmark
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
export default RandInfo;
