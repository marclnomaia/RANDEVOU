import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography, Grid, ListItemIcon } from '@mui/material';

const RandInfo: React.FC = () => {
  return (
    <div style={{ padding: '60px' }}>
      <Grid container spacing={2} justifyContent="left" wrap="wrap">  {/* Adicionado wrap="wrap" */}

        <Grid item xs={12} sm={6} md={6} lg={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            mt: 7

          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: 25 }}>
              Marcilino da Maia
            </Typography>
            <ListItemIcon sx={{ minWidth: 'unset', fontSize: 8, ml: 1 }}>
              <LocationOnIcon fontSize="inherit" />
            </ListItemIcon>
            <Typography variant="subtitle1" color="text.secondary"
              sx={{
                fontWeight: 'bold',
                fontSize: 8,
                ml: 1
              }}
            >
              New York, NY
            </Typography>
          </div>

          <Typography variant="subtitle2"
            sx={{
              fontSize: 12,
              color: '#007FFF',
              fontWeight: 'bold'
            }}
          >
            Junior Programmer
          </Typography>

          <Typography variant="subtitle1"
            sx={{
              fontSize: 12,
              color: '#ccc',
              fontWeight: 'bold',
              mt: 2
            }}
          >
            Rankings
          </Typography>
        </Grid>

        {/* Bookmark */}
        <Grid item xs={12} sm={6} md={8} lg={8}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: 'lightgray',
            ml: 55,
            mt: -23
          }}
        >
          <BookmarkIcon
            sx={{
              fontSize: 16

            }} />
          <Typography variant="body2"
            sx={{
              fontSize: 16,
              padding: 1,
              textAlign: 'right',

            }}
          >
            Bookmark
          </Typography>
        </Grid>
      </Grid>

    </div >
  );
};

export default RandInfo;
