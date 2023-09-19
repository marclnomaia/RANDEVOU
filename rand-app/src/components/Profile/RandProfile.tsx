//import { useTheme, useMediaQuery } from '@mui/material';
import {
  Typography, Avatar, Divider, Chip, List, ListItem,
  Grid
} from '@mui/material';

import imageSrc from '../images/main_picture.jpg';

//isMobile hook
const RandProfile: React.FC = () => {

  return (
    <div style={{ padding: '60px' }}>
      <Grid container spacing={2} justifyContent="left" flexDirection="column" alignItems="flex-start" >
        <Grid item xs={12} sm={6} md={6} lg={8}
          sx={{
            mt: 7,
            width: '100%',
            height: '100%',
            padding: 0
          }}
        >
          <Avatar
            src={imageSrc}
            alt="Profile"
            sx={{

              borderRadius: 0,
              width: '100%',
              height: '100%',
              flexWrap: 'wrap',
            }}
          />
        </Grid>


        {/* Work menu */}

        <Grid item xs={8} sm={12} md={12} lg={8}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 1,
            flexWrap: 'wrap',
            flexDirection: 'row'
          }}
        >
          <Typography variant="body1"
            sx={{
              fontSize: 12,
              color: '#ccc',
              mt: 1
            }}
          >
            Work
          </Typography>
        </Grid>
        <Grid item xs={8} sm={12} md={12} lg={8}>
          <Divider flexItem
            sx={{
              width: {
                xs: '140px',
                sm: '155px',
                md: '155px',
                lg: '220px'
              },
              height: 'auto',
              mt: -2.7,
              ml: 4,
              flexWrap: 'nowrap'
            }}
          />
        </Grid>
        <Grid item xs={8} sm={12} md={12} lg={8}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            mt: -2,
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center', flexWrap: 'nowrap'
            }}>
            <Typography variant="body1"
              sx={{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            >
              Spotify New York
            </Typography>
            <Chip label="Primary" variant="outlined"
              sx={{
                width: 'auto',
                height: 'auto',
                borderRadius: '1px',
                fontSize: 11,
                background: 'lightblue',
                color: '#007FFF',
                fontWeight: 'bold',
                ml: 1,
                mt: -1
              }}
            />
          </div>


          <Typography variant="body1"
            sx={{
              fontSize: 12,
              color: 'grey'
            }}
          >
            170 William Street
          </Typography>
          <Typography variant="body1"
            sx={{
              fontSize: 12,
              color: 'grey'
            }}
          >
            New York, NY 10038-78 212-312-51
          </Typography>
        </Grid>
        <Grid item xs={8} sm={12} md={12} lg={8}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            mt: 5
          }}
        >
          <div style={{ display: 'flex', alignItems: 'left' }}>
            <Typography variant="body1"
              sx={{
                fontSize: 14,
                fontWeight: 'bold',
                mt: -2
              }}
            >
              Metropolitan
            </Typography>

            <Chip label="Secondary" variant="outlined"
              sx={{
                width: 'auto',
                height: '100%',
                borderRadius: '1px',
                fontSize: 11,
                background: 'lightblue',
                color: '#007FFF',
                fontWeight: 'bold',
                marginLeft: '16px',
                mt: -2
              }}
            />
          </div>
          <Typography variant="body1"
            sx={{
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >Museum
          </Typography>
          <Typography variant="body1"
            sx={{
              fontSize: 12,
              color: 'grey'
            }}
          >
            525 E 68th Street
          </Typography>
          <Typography variant="body1"
            sx={{
              fontSize: 12,
              color: 'grey'
            }}
          >
            New York,NY 10651-78 156-187-60
          </Typography>
        </Grid>

        {/*Skills*/}

        <Grid item xs={8} sm={12} md={12} lg={8}

          sx={{
            width: 180,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            mt: 0
          }}>
          <Typography variant="body2"
            sx={{
              fontSize: 12,
              color: '#ccc'
            }}>
            Skills
          </Typography>
          <Grid item xs={8} sm={12} md={12} lg={8}>
            <Divider flexItem
              sx={{
                width: {
                  xs: '140px',
                  sm: '175px',
                  md: '195px',
                  lg: '220px'
                },
                height: 'auto',
                mt: -0.5,
                ml: 4,
                flexWrap: 'auto'
              }}
            />
          </Grid>
          <List>
            <ListItem disablePadding>
              <Typography variant="body2"
                sx={{
                  fontSize: 11,
                  mt: 2
                }}
              >Branding
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <Typography variant="body2"
                sx={{
                  fontSize: 11,
                  mt: -2
                }}
              >UI/UX
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <Typography variant="body2"
                sx={{
                  fontSize: 12,
                  mt: -2
                }}
              >Web-Design
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <Typography variant="body2"
                sx={{
                  fontSize: 12,
                  mt: -2
                }}
              >Packaging
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <Typography variant="body2"
                sx={{
                  fontSize: 12,
                  mt: -2
                }}
              >Print & Editorial
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>





    </div >
  );
}


export default RandProfile;




