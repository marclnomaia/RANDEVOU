import {
  Typography, Avatar, Divider, Chip, List, ListItem,
  Grid,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';

import imageSrc from '../images/main_picture.jpg';





const RandProfile: React.FC = () => {

  //isMobile hook
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={0} padding={4} display="flex" justifyContent="start-end">
      <Grid item xs={12} sm={3} md={12} lg={12}>
        <Box sx={{
          bgcolor: 'white',
          width: '100%',
          height: { xs: '45vh', md: '77vh' }
        }}>
          <Avatar
            src={imageSrc}
            alt="Profile"
            sx={{
              borderRadius: 0,
              width: isMobile ? '30%' : '100%',
              height: isMobile ? '30%' : '30%',
              flexWrap: 'wrap',
            }} />
          {/* Work menu */}
          <Box>
            <Typography variant="body1"
              sx={{
                fontSize: isMobile ? 8 : 12,
                color: '#ccc',
                mt: isMobile ? 1 : 2,
              }}>
              Work
            </Typography>
            <Divider flexItem
              sx={{
                width: isMobile ? '40%' : '90%',
                height: 'auto',
                mt: isMobile ? -0.5 : -0.8,
                ml: isMobile ? 2.7 : 4,
                flexWrap: 'nowrap'
              }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center', flexWrap: 'nowrap'
              }}>
              <Typography variant="body1"
                sx={{
                  fontSize: isMobile ? 9 : 14,
                  fontWeight: 'bold',
                  mt: isMobile ? 1 : 2
                }}
              >
                Spotify New York
              </Typography>
              <Chip label="Primary" variant="outlined"
                sx={{
                  width: isMobile ? '20%' : 'auto',
                  height: isMobile ? '20%' : 'auto',
                  borderRadius: '1px',
                  fontSize: isMobile ? 8 : 11,
                  background: 'lightblue',
                  color: '#007FFF',
                  fontWeight: 'bold',
                  ml: 1,
                  mt: isMobile ? 1 : 2
                }}
              />
            </div>
            <Typography variant="body1"
              sx={{
                fontSize: isMobile ? 8 : 12,
                color: 'grey'
              }}>
              170 William Street
            </Typography>
            <Typography variant="body1"
              sx={{
                fontSize: isMobile ? 8 : 12,
                color: 'grey'
              }}>
              New York, NY 10038-78 212-312-51
            </Typography>
          </Box>
          <Box>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <Typography variant="body1"
                sx={{
                  fontSize: isMobile ? 9 : 14,
                  fontWeight: 'bold',
                  mt: isMobile ? 0.5 : 2
                }}>
                Metropolitan
              </Typography>
              <Chip label="Secondary" variant="outlined"
                sx={{
                  width: isMobile ? '22%' : 'auto',
                  height: isMobile ? '20%' : '100%',
                  borderRadius: '1px',
                  fontSize: isMobile ? 8 : 11,
                  background: 'lightblue',
                  color: '#007FFF',
                  fontWeight: 'bold',
                  marginLeft: isMobile ? '18px' : '16px',
                  mt: isMobile ? 0.5 : 2.3
                }} />
            </div>
            <Typography variant="body1"
              sx={{
                fontSize: isMobile ? 9 : 14,
                fontWeight: 'bold',
              }}>
              Museum
            </Typography>
            <Typography variant="body1"
              sx={{
                fontSize: isMobile ? 8 : 12,
                color: 'grey'
              }}>
              525 E 68th Street
            </Typography>
            <Typography variant="body1"
              sx={{
                fontSize: isMobile ? 8 : 12,
                color: 'grey'
              }}>
              New York,NY 10651-78 156-187-60
            </Typography>
          </Box>
          {/*Skills*/}
          <Grid item
            sx={{
              flexDirection: 'column',
              mt: 2
            }}>
            <Typography variant="body2"
              sx={{
                fontSize: isMobile ? 8 : 12,
                color: '#ccc',
                mt: isMobile ? 1 : 1
              }}>
              Skills
            </Typography>
            <Divider flexItem
              sx={{
                width: isMobile ? '40%' : '90%',
                height: 'auto',
                mt: isMobile ? -0.5 : -0.5,
                ml: isMobile ? 2.5 : 4
              }} />
            <Grid item
              sx={{
                mt: 2
              }}>
              <List>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 12,
                    }}
                  >Branding
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 12,
                      mt: 0.5
                    }}>
                    UI/UX
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 12,
                      mt: 0.5
                    }}>
                    Web-Design
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 12,
                      mt: 0.5
                    }}>
                    Packaging
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2"
                    sx={{
                      fontSize: isMobile ? 8 : 12,
                      mt: 0.5
                    }}>
                    Print & Editorial
                  </Typography>
                </ListItem>
              </List>
            </Grid>

          </Grid>
        </Box>
      </Grid >
    </Grid >





  );
}


export default RandProfile;




