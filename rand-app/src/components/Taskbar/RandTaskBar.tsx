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
import { Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import RandTimeline from '../Sidebar/RandTimeline';


export default function RandTaskBar() {
  const [messageBoxVisible, setMessageBoxVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [tabValue, setTabValue] = useState('timeline');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTabValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            ml: isMobile ? 6 : 5,
            mt: isMobile ? -17 : -20
          }}>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              ml: isMobile ? -2 : -10,
              mt: isMobile ? 50 : 20
            }}>
            <ChatBubbleTwoToneIcon
              sx={{//send message icon//
                marginRight: isMobile ? 1 : 1,
                fontSize: isMobile ? 12 : 18
              }} />
            <Typography variant="body2" component="div"
              sx={{
                fontSize: isMobile ? 10 : 12
              }}
              onClick={() => setMessageBoxVisible(!messageBoxVisible)}
            > Send message
            </Typography>
          </Box>

          <Box
            sx={{//taskBar menu Background//
              mt: isMobile ? -4 : -4.5,
              ml: isMobile ? 11 : 5,
              display: 'flex',
              flexDirection: 'row',
              width: isMobile ? 50 : 90,
              height: isMobile ? 5 : 10,
              alignItems: 'center',
              backgroundColor: contactInfoVisible ? 'lightblue' : 'transparent',
              borderRadius: '1px',
              padding: '10px',
              gap: isMobile ? '8px' : '20px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <CheckTwoToneIcon
                sx={{//message icon//
                  marginRight: isMobile ? 1 : 1,
                  fontSize: isMobile ? 12 : 16,
                  mt: isMobile ? 0 : -0
                }}
              />
              <Typography
                variant="body2"
                component="div"
                sx={{//message menu
                  fontSize: isMobile ? 8 : 12,
                  ml: isMobile ? -0.5 : -0.5,
                  mt: isMobile ? 0.2 : 0.4,
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}
                onClick={() => setContactInfoVisible(!contactInfoVisible)}
              >Contacts
              </Typography>
            </Box>

            <Typography
              variant="body2"
              component="div"
              sx={{//report user menu//
                fontSize: isMobile ? 8 : 12,
                ml: isMobile ? 4 : 2,
                mt: isMobile ? 0.2 : 0.1,
                fontFamily: 'Helvetica, Arial, sans-serif',
                whiteSpace: 'nowrap'
              }}
            >
              Report user
            </Typography>
          </Box>

          {messageBoxVisible && (
            <Box
              sx={{//message box
                marginTop: 3,
                borderRadius: '10px',
                padding: isMobile ? 1 : 2,
                width: isMobile ? '250px' : '500px',
                margin: '20px auto',

              }}
            >
              <Typography
                sx={{
                  fontSize: isMobile ? 8 : 12,
                  ml: isMobile ? -15 : -60
                }}
              >
                This is where your message Box would go...
              </Typography>
            </Box>
          )}



          {contactInfoVisible &&
            <Box
              sx={{//contact information when clicked//
                marginTop: 3, borderRadius: '10px',
                padding: isMobile ? 0.2 : 2,
                width: isMobile ? '250PX' : '500px',
                margin: '20px auto',
                ml: isMobile ? -3 : -13,
                mt: isMobile ? -6.2 : -7,
              }}>
              <Tabs
                value={tabValue} onChange={handleChange} TabIndicatorProps={{
                  style: {
                    backgroundColor: 'blue',
                    width: isMobile ? '60px' : '100px',
                    marginLeft: isMobile ? '15px' : '5px'
                  },
                }}>
                <Tab label={<Stack direction="row" spacing={isMobile ? 0.5 : 1} alignItems="center">
                  <VisibilityIcon
                    sx={{//timeline icon
                      fontSize: isMobile ? 10 : 15
                    }}
                  />
                  <Typography
                    sx={{//timeline menu
                      fontSize: isMobile ? 6 : 12

                    }}
                  >Timeline
                  </Typography>
                </Stack>} value="timeline" />
                <Tab label={<Stack direction="row" spacing={isMobile ? 0.5 : 1} alignItems="center">

                  <PersonIcon
                    sx={{//About icon
                      fontSize: isMobile ? 10 : 15
                    }}
                  />
                  <Typography
                    sx={{//about menu
                      fontSize: isMobile ? 6 : 12

                    }}
                  >About
                  </Typography>
                </Stack>} value="about" />
              </Tabs>
              <Divider flexItem
                sx={{//show timeline and About when clicked, and call RandTimeline//
                  width: isMobile ? 300 : 750, height: 2,
                  mt: -0.5, mb: 1, ml: 2
                }} />

              {tabValue === 'timeline' && <RandTimeline />}
              {tabValue === 'about' &&
                <Box
                  sx={{
                    marginTop: 3, fontSize: 12
                  }}>
                  <Typography variant="body2" component="div"
                    sx={{//contact information menu
                      marginBottom: 2, color: 'grey',
                      textAlign: 'left', fontSize: isMobile ? 8 : 12,
                      ml: isMobile ? 2 : 2
                    }}
                  >Contact Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box display="flex" gap={6}
                            sx={{
                              fontSize: isMobile ? 8 : 12
                            }}>
                            <Typography variant="body2" component="span"
                              sx={{
                                fontSize: isMobile ? 8 : 12, mt: -3, ml: 0
                              }}
                            >Phone:
                            </Typography>
                            <Typography variant="body2" component="span" color="primary"
                              sx={{
                                fontSize: isMobile ? 8 : 12, mt: -3, ml: 0
                              }}
                            >+4167318796
                            </Typography>
                          </Box>
                        } />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box
                            sx={{
                              width: 200, display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start'
                            }}>
                            <Box display="flex" gap={3} flexDirection="row" alignItems="center" >
                              <Typography variant="body1" component="span"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, mt: -2, ml: 0
                                }}>Address:</Typography>
                              <Typography variant="body1"
                                sx={{
                                  fontSize: isMobile ? 8 : 12, color: 'black',
                                  ml: 2, mt: -2, width: '200px'
                                }}
                              >525 E 68th Street
                              </Typography>
                            </Box>
                            <Typography variant="body2"
                              sx={{
                                fontSize: isMobile ? 8 : 12, color: 'black',
                                paddingY: 2, width: '200px', ml: 11, mt: -2
                              }}
                            >New York, NY 10651-78 156-187-60
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box display="flex" gap={6} >
                            <Typography variant="body2" component="span"
                              sx={{ fontSize: isMobile ? 8 : 12, mt: -3, ml: 0 }}
                            >E-mail:
                            </Typography>
                            <Typography variant="body2" component="span" color="primary"
                              sx={{
                                fontSize: isMobile ? 8 : 12, mt: -3, ml: 0
                              }}
                            >marcilino.damaia@gmail.com
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box display="flex" gap={8}>
                            <Typography variant="body2" component="span"
                              sx={{
                                fontSize: isMobile ? 8 : 12, mt: -2
                              }}
                            >Site:
                            </Typography>
                            <Typography variant="body2" component="span" color="primary"
                              sx={{
                                fontSize: isMobile ? 8 : 12, ml: -0.5, mt: -2
                              }}
                            >marcmaia.com
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  </List>
                  <Typography variant="body2" component="div"
                    sx={{
                      marginBottom: 2, color: 'grey', textAlign: 'left',
                      fontSize: isMobile ? 8 : 12, ml: 2
                    }}
                  >Basic Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box display="flex" gap={4} >
                            <Typography variant="body2"
                              sx={{ fontSize: isMobile ? 8 : 12, mt: -3, ml: 0 }}
                            >Birthday
                            </Typography>
                            <Typography variant="body2"
                              sx={{ fontSize: isMobile ? 8 : 12, mt: -3, ml: 0 }}
                            >June 5, 1992
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box display="flex" gap={4}>
                            <Typography variant="body2"
                              sx={{
                                fontSize: isMobile ? 8 : 12, mt: -2
                              }}
                            >Gender
                            </Typography>
                            <Typography variant="body2"
                              sx={{
                                fontSize: isMobile ? 8 : 12, mt: -2, ml: 0.5
                              }}
                            >Male
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>}
            </Box>}
        </Box>
      </Grid>
    </Grid>
  );
}
