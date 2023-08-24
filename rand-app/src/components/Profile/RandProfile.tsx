import { useTheme, useMediaQuery } from '@mui/material';
import {
  Box, Typography, Avatar, Divider, Chip, List, ListItem,
  ListItemIcon, Grid
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import imageSrc from '../images/main_picture.jpg';

//isMobile hook
const RandProfile: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div style={{
      fontSize: isMobile ? '2px' : '12px',
      padding: isMobile ? '2px' : '20px'
    }}>
      <Grid container spacing={isMobile ? 1 : 2} justifyContent="left" mt={isMobile ? 4 : 10}>
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              ml: isMobile ? 3 : 5, mt: isMobile ? 8 : 0, width: isMobile ? '75%' : 170,
              fontFamily: 'Helvetica, Arial, sans-serif'
            }}>

            <Box
              sx={{
                width: isMobile ? '30%' : 170, height: isMobile ? 100 : 195, marginTop: -10
              }}>
              <Avatar
                src={imageSrc}
                alt="Profile"
                sx={{
                  width: '100%', height: '100%', borderRadius: 0
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex', alignItems: 'flex-start', my: 2, border: 'none'
              }}>
              <Typography variant="body1"
                sx={{  //Work menu//
                  mt: isMobile ? 0 : 2, mr: 2, fontSize: isMobile ? 8 : 10, color: '#ccc'
                }}
              >Work
              </Typography>
              <Divider flexItem
                sx={{
                  width: 170, height: 2, mt: isMobile ? 0.6 : 3, mb: 1, ml: -2
                }} />
            </Box>
            <Box
              sx={{
                width: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
              }}>
              <Typography variant="body1"
                sx={{
                  fontWeight: 'bold', fontSize: isMobile ? 10 : 12
                }}
              >Spotify New York
              </Typography>
              <Typography variant="body1"
                sx={{
                  fontSize: isMobile ? 7 : 11, color: 'grey'
                }}
              >170 William Street
              </Typography>
              <Typography variant="body1"
                sx={{
                  fontSize: isMobile ? 7 : 11, color: 'grey'
                }}
              >New York,NY 10038-78 212-312-51
              </Typography>
            </Box>
            <Chip label="Primary" variant="outlined"
              sx={{
                mt: isMobile ? -8 : -15,
                ml: 15,
                height: isMobile ? 10 : 20,
                borderRadius: '1px',
                fontSize: isMobile ? 8 : 11,
                background: 'lightblue',
                color: '#007FFF',
                fontWeight: 'bold'
              }}
            />

            <Box
              sx={{
                width: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
              }}>
              <Typography variant="body1"
                sx={{
                  fontWeight: 'bold', fontSize: isMobile ? 10 : 12
                }}
              >Metropolitan
              </Typography>
              <Typography variant="body1"
                sx={{
                  fontWeight: 'bold', fontSize: isMobile ? 10 : 12
                }}
              >Museum
              </Typography>
              <Typography variant="body1"
                sx={{
                  fontSize: isMobile ? 7 : 11, color: 'grey'
                }}
              >525 E 68th Street
              </Typography>
              <Typography variant="body1"
                sx={{
                  fontSize: isMobile ? 7 : 11, color: 'grey'
                }}
              >New York,NY 10651-78 156-187-60
              </Typography>
            </Box>

            <Chip label="Secondary" variant="outlined"
              sx={{
                mt: isMobile ? -10 : -19,
                ml: isMobile ? 16 : 12,
                height: isMobile ? 10 : 20,
                width: isMobile ? '70px' : 'auto',
                borderRadius: '1px',
                fontSize: isMobile ? 8 : 11,
                background: 'lightblue',
                color: '#007FFF',
                fontWeight: 'bold',

              }}
            />

            <Box
              sx={{      //Skills//
                display: 'flex', alignItems: 'flex-start', my: 2, border: 'none'
              }}>
              <Typography variant="body2"
                sx={{
                  mt: isMobile ? -1 : -1, mr: isMobile ? 2 : 2, fontSize: isMobile ? 8 : 10, color: '#ccc'
                }}>
                Skills
              </Typography>
              <Divider flexItem sx={{ width: 170, height: 2, mt: isMobile ? -0.2 : 0, mb: 1, ml: -2 }} />
            </Box>
            <Box
              sx={{
                width: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: -2
              }}>
              <List>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 11
                    }}
                  >Branding
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 11
                    }}
                  >UI/UX
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 11
                    }}
                  >Web-Design
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 11
                    }}
                  >Packaging
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 11
                    }}
                  >Print & Editorial
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Display name */}
            <Box
              sx={{
                display: 'flex', flexDirection: 'column',
                ml: isMobile ? 12 : 30,
                mt: isMobile ? -51.5 : -70,
                width: isMobile ? 290 : 700
              }}>
              <List>
                <ListItem disablePadding>
                  <Box
                    sx={{
                      display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" component="div"
                        sx={{
                          fontWeight: 'bold', fontSize: isMobile ? 11 : 25, mt: isMobile ? 7.5 : 1
                        }}>
                        Marcilino da Maia
                      </Typography>
                      <ListItemIcon
                        sx={{ //Location
                          minWidth: 'unset',
                          mr: isMobile ? 0.5 : 0.5,
                          fontSize: isMobile ? 7 : 8,
                          mt: isMobile ? 7.5 : 0

                        }}>
                        <LocationOnIcon fontSize="inherit" spacing={1}
                        />
                      </ListItemIcon>
                      <Typography variant="subtitle1" color="text.secondary"
                        sx={{
                          fontWeight: 'bold', fontSize: isMobile ? 7 : 8, mt: isMobile ? 7.5 : 0
                        }}
                      >
                        New York, NY
                      </Typography>
                      <Box sx={{
                        ml: isMobile ? 12 : 125,
                        mt: isMobile ? 11 : 0,
                        position: 'absolute', display: 'flex',
                        alignItems: 'center',
                        top: 'right',
                        color: 'lightgrey'
                      }}>
                        <BookmarkIcon
                          sx={{
                            fontSize: isMobile ? 8 : 16
                          }}
                        />
                        <Typography variant="body2"
                          sx={{
                            fontSize: isMobile ? 8 : 16,
                            adding: 1
                          }}
                        >Bookmark
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="subtitle2"
                      sx={{
                        fontSize: isMobile ? 8 : 12, color: '#007FFF',
                        fontWeight: 'bold'
                      }}
                    >Junior Programmer
                    </Typography>
                    {/* Display Ranking */}
                    <Typography variant="subtitle1"
                      sx={{
                        fontSize: isMobile ? 7 : 12, color: '#ccc',
                        fontWeight: 'bold', mt: isMobile ? 1 : 1, ml: 0
                      }}
                    >Rankings
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}


export default RandProfile;




