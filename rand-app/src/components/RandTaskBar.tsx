import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
    <Box sx={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Stack direction="row" spacing={2} justifyContent="center">

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', ml: -20 }}>
          <ChatBubbleTwoToneIcon sx={{ marginRight: 1 }} />
          <Typography variant="body2" component="div" sx={{ fontSize: 12 }} onClick={() => setMessageBoxVisible(!messageBoxVisible)}>
            Send message
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px', backgroundColor: contactInfoVisible ? 'lightblue' : 'transparent' }}>
          <CheckTwoToneIcon sx={{ marginRight: 1 }} />
          <Typography variant="body2" component="div" sx={{ fontSize: 12 }} onClick={() => setContactInfoVisible(!contactInfoVisible)}>
            Contacts
          </Typography>
        </Box>
        <Box >
          <Typography variant="body2" component="div" sx={{ padding: '10px', fontSize: 12, mt: 0.5, fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Report user
          </Typography>
        </Box>

      </Stack>

      {messageBoxVisible &&
        <Box sx={{ marginTop: 3, borderRadius: '10px', padding: 2, width: '500px', margin: '20px auto' }}>
          {/* Here you can add your message Box UI */}
          <Typography sx={{ fontSize: 12 }}>This is where your message Box would go...</Typography>
        </Box>}

      {contactInfoVisible &&
        <Box sx={{ marginTop: 3, borderRadius: '10px', padding: 2, width: '500px', margin: '20px auto' }}>
          <Tabs value={tabValue} onChange={handleChange}>
            <Tabs value={tabValue} onChange={handleChange}>
              <Tab label={<Stack direction="row" spacing={1} alignItems="center"><VisibilityIcon /><Typography sx={{ fontSize: 11 }}>Timeline</Typography></Stack>} value="timeline" />
              <Tab label={<Stack direction="row" spacing={1} alignItems="center"><PersonIcon /><Typography sx={{ fontSize: 11 }}>About</Typography></Stack>} value="about" />
            </Tabs>
          </Tabs>

          {tabValue === 'timeline' && <RandTimeline />}

          {tabValue === 'about' &&
            <Box sx={{ marginTop: 3, fontSize: 12 }}>
              <Typography variant="body2" component="div" sx={{ marginBottom: 2, color: 'grey', textAlign: 'left', fontSize: 12 }}>Contact Information</Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box display="flex" gap={6} sx={{ fontSize: 12 }}>
                        <Typography variant="body2" component="span" sx={{ fontSize: 12, mt: -3, ml: -2 }}>Phone:</Typography>
                        <Typography variant="body2" component="span" color="primary" sx={{ fontSize: 12, mt: -3, ml: -1 }} >+4167318796</Typography>
                      </Box>
                    } />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box sx={{ width: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Box display="flex" gap={3} flexDirection="row" alignItems="center" >
                          <Typography variant="body1" component="span" sx={{ fontSize: 12, mt: -2, ml: -2 }}>Address:</Typography>
                          <Typography variant="body1" sx={{ fontSize: 12, color: 'black', ml: 1, mt: -2, width: '200px' }}>525 E 68th Street</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontSize: 12, color: 'black', paddingY: 2, width: '200px', ml: 8 }}>New York, NY 10651-78 156-187-60</Typography>
                      </Box>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box display="flex" gap={6} >
                        <Typography variant="body2" component="span" sx={{ fontSize: 12, mt: -3, ml: -2 }}>E-mail:</Typography>
                        <Typography variant="body2" component="span" color="primary" sx={{ fontSize: 12, mt: -3, ml: -1 }}>marcilino.damaia@gmail.com</Typography>
                      </Box>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box display="flex" gap={8}>
                        <Typography variant="body2" component="span" sx={{ fontSize: 12, ml: -2 }}>Site:</Typography>
                        <Typography variant="body2" component="span" color="primary" sx={{ fontSize: 12, ml: -1 }}>marcmaia.com</Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </List>
              <Typography variant="body2" component="div" sx={{ marginBottom: 2, color: 'grey', textAlign: 'left', fontSize: 12 }}>Basic Information</Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box display="flex" gap={4} >
                        <Typography variant="body2" sx={{ fontSize: 12, mt: -2, ml: -2 }} >Birthday</Typography>
                        <Typography variant="body2" sx={{ fontSize: 12, mt: -2, ml: 0 }} >June 5, 1992</Typography>
                      </Box>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box display="flex" gap={4}>
                        <Typography variant="body2" sx={{ fontSize: 12, mt: -1, ml: -2 }}>Gender</Typography>
                        <Typography variant="body2" sx={{ fontSize: 12, mt: -1, ml: 0 }}>Male</Typography>
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



