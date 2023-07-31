import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InfoIcon from '@mui/icons-material/Info';
import TimelineIcon from '@mui/icons-material/Timeline';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import RandTimeline from './RandTimeline';

export default function RandTaskBar() {
  const [messageBoxVisible, setMessageBoxVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [tabValue, setTabValue] = useState('timeline');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTabValue(newValue);
  };
  

  
  

  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="center">

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px'}}>
          <ChatBubbleTwoToneIcon sx={{ marginRight: 1 }}/>
          <Typography variant="body2" component="div" onClick={() => setMessageBoxVisible(!messageBoxVisible)}>
            Send message
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px', backgroundColor: contactInfoVisible ? 'lightblue' : 'transparent' }}>
          <CheckTwoToneIcon sx={{ marginRight: 1 }}/>
          <Typography variant="body2" component="div" onClick={() => setContactInfoVisible(!contactInfoVisible)}>
            Contacts
          </Typography>
        </Box>

        <Typography variant="body2" component="div" sx={{ padding: '10px'}}>
          Report user
        </Typography>

      </Stack>
      
      {messageBoxVisible && 
        <Box sx={{ marginTop: 3, borderRadius: '10px', padding: 2, width: '500px', margin: '20px auto' }}>
          {/* Here you can add your message Box UI */}
          <Typography>This is where your message Box would go...</Typography>
        </Box>}
      
      {contactInfoVisible &&
        <Box sx={{ marginTop: 3, borderRadius: '10px', padding: 2, width: '500px', margin: '20px auto' }}>
        <Tabs value={tabValue} onChange={handleChange}>
        <Tabs value={tabValue} onChange={handleChange}>
  <Tab label={<Stack direction="row" spacing={1} alignItems="center"><TimelineIcon/><Typography>Timeline</Typography></Stack>} value="timeline" />
  <Tab label={<Stack direction="row" spacing={1} alignItems="center"><InfoIcon/><Typography>About</Typography></Stack>} value="about" />
</Tabs>
        </Tabs>
      
        {tabValue === 'timeline' && <RandTimeline />}
      
        {tabValue === 'about' && 
          <Box sx={{ marginTop: 3, fontSize:10}}>
             <List>
  <ListItem>
    <ListItemText 
      primary={
        <Box display="flex" gap={6}>
        <Typography variant="body2" component="span">Phone:</Typography>
          <Typography variant="body2" component="span" color="primary">+4167318796</Typography>
        </Box>
      }
    />
  </ListItem>
  <ListItem>
    <ListItemText 
      primary={
        <Box display="flex" gap={5}>
        <Typography variant="body2" component="span">Address:</Typography>
        <Typography variant="body2" component="span" color="primary">525 e 68th Street, New York, NY 10651-78 156-187-60</Typography>
        </Box>
      }
    />
  </ListItem>
  <ListItem>
    <ListItemText 
      primary={
        <Box display="flex" gap={6}>
          <Typography variant="body2" component="span">E-mail:</Typography>
          <Typography variant="body2" component="span" color="primary">marcilino.damaia@gmail.com</Typography>
        </Box>
      }
    />
  </ListItem>
  <ListItem>
    <ListItemText 
      primary={
        <Box display="flex" gap={8}>
          <Typography variant="body2" component="span">Site:</Typography>
          <Typography variant="body2" component="span" color="primary">marcmaia.com</Typography>
        </Box>
      }
    />
  </ListItem>
</List>
              <Typography variant="body2" component="div" sx={{ marginBottom: 2, color: 'grey', textAlign: 'left' }}>Basic Information</Typography>
              <Divider />
              ;

              <List>
  <ListItem>
    <ListItemText
      primary={
        <Box display="flex" gap={4}>
          <Typography variant="body2">Birthday</Typography>
          <Typography variant="body2">January 1, 2000</Typography>
        </Box>
      }
    />
  </ListItem>
  <ListItem>
    <ListItemText
      primary={
        <Box display="flex" gap={4}>
          <Typography variant="body2">Gender</Typography>
          <Typography variant="body2">Male</Typography>
        </Box>
      }
    />
  </ListItem>
</List>
            </Box>}
        </Box>}
    </Box>
  );
}



