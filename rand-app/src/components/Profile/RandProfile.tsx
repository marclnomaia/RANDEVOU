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
      <Grid container spacing={2} justifyContent="left" >
        <Grid item xs={4} sm={2} md={4} lg={10}
          sx={{ mt: 2 }}
        >
          <Avatar
            src={imageSrc}
            alt="Profile"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: 0,
              display: 'flex'
            }}
          />
        </Grid>
      </Grid>

      {/* Work menu */}
      <Grid container item xs={4} sm={2} md={3} lg={10}
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 2,
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
        <Divider flexItem
          sx={{
            width: '85%',
            height: '1px',
            mt: -1,
            ml: 4

          }}
        />
      </Grid>
      <Grid container item xs={4} sm={2} md={3} lg={10}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          mt: 2,
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
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


      <Grid container item xs={4} sm={2} md={3} lg={10}
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
              height: '20%',
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
      <Grid container spacing={2} justifyContent="left" mt={10}>
        <Grid item xs={4} sm={2} md={3} lg={10}

          sx={{
            width: 180,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            mt: -8
          }}>
          <Typography variant="body2"
            sx={{
              fontSize: 12,
              color: '#ccc'
            }}>
            Skills
          </Typography>
          <Grid item xs={4} sm={2} md={3} lg={10}>
            <Divider flexItem
              sx={{
                width: '200px',
                height: 2,
                mt: -1,
                ml: 5,
                alignItems: 'center',
                flexGrow: 1,
                flexWrap: 'wrap'

              }} />
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




