import React from 'react';
import imageSrc from './images/main_picture.jpg';
import { Box, Typography, Divider, Chip, Avatar, ListItem, List, ListItemIcon } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

class RandProfile extends React.Component {
  render() {
    return (
      <Box sx={{ ml: 15, mt: 15, width: 170, alignItems: 'left' }}>
        <Box sx={{ width: 200, height: 210, marginTop: -10 }}>
          <Avatar
            src={imageSrc}
            alt="Profile"
            sx={{ width: '100%', height: '100%', borderRadius:0 }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', my: 2, border: 'none' }}>
          <Typography variant="body1" sx={{ mt: 3, mr: 2, fontSize: 10, color: '#ccc' }}>Work</Typography>
          <Divider flexItem sx={{ width: 170, height: 2, mt: 4, mb: 1, ml: -2 }} />
        </Box>
      <Box sx={{ width: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 13 }}>Spotify New York</Typography>
        <Typography variant="body1" sx={{ fontSize: 12, color:'grey' }}>170 William Street</Typography>
        <Typography variant="body1" sx={{ fontSize: 12, color:'grey' }}>New York,NY 10038-78 212-312-51</Typography>       
      </Box>
      <Chip label="Primary" variant="outlined"  sx={{ mt:-15, ml:15,height:'25px', borderRadius: '1px', background:'lightblue',color:'#007FFF',fontWeight: 'bold' }} />
      <Box sx={{ width: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 13 }}>Metropolitan</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 13 }}>Museum</Typography>
        <Typography variant="body1" sx={{ fontSize: 12, color:'grey' }}>525 E 68th Street</Typography>
        <Typography variant="body1" sx={{ fontSize: 12, color:'grey' }}>New York,NY 10651-78 156-187-60</Typography>
      </Box>
      <Chip label="Secondary" variant="outlined" sx={{ mt:-19, ml:12 ,height:'25px', borderRadius: '1px', background:'lightblue',color:'#007FFF',fontWeight: 'bold' }} />
      <Box sx={{ display: 'flex', alignItems: 'flex-start', my: 2, border: 'none' }}>
        <Typography variant="body2" sx={{ mt: 0, mr: 2, fontSize: 10, color: '#ccc' }}>Skills</Typography>
        <Divider flexItem sx={{ width: 170, height: 2, mt: 1, mb: 1, ml: -2 }} />
      </Box>
      <Box sx={{ width: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <List>
        <ListItem disablePadding>
            <Typography variant="body2" sx={{ fontSize: 12 }}>Branding</Typography>
        </ListItem>
        <ListItem disablePadding>
            <Typography variant="body2" sx={{ fontSize: 12 }}>UI/UX</Typography>
        </ListItem>
        <ListItem disablePadding>
            <Typography variant="body2" sx={{ fontSize: 12 }}>Web-Design</Typography>
        </ListItem>
        <ListItem disablePadding>
            <Typography variant="body2" sx={{ fontSize: 12 }}>Packaging</Typography>
        </ListItem>
        <ListItem disablePadding>
            <Typography variant="body2" sx={{ fontSize: 12 }}>Print & Editorial</Typography>
        </ListItem>
    </List>
</Box>

{/*Display name*/}
<Box sx={{ display: 'flex', flexDirection: 'column', ml: 60, mt: -75, width: 700 }}>
      <List>
        <ListItem disablePadding>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: 25 }}>
                Marcilino da Maia
              </Typography>
              <ListItemIcon sx={{ minWidth: 'unset', mr: 0.5 }}>
                <LocationOnIcon fontSize="inherit" />
              </ListItemIcon>
              <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 8 }}>
                New York, NY
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ fontSize: 12, color:'#007FFF', fontWeight: 'bold' }}>Junior Programmer</Typography>
            {/*Display Rankng*/}
            <Typography variant="subtitle1" sx={{ fontSize: 12, color:'#ccc', fontWeight: 'bold',mt:3 }}>Rankings</Typography>
          </Box>
        </ListItem>
        
      </List>
    </Box>
    </Box>
    
    )
    }
  }
 export default RandProfile;




