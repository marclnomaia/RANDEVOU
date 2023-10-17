import React, { useState } from 'react';
import {
  Toolbar, IconButton, Typography, InputBase, Badge,
  Grid, Box, Menu, MenuItem, useMediaQuery, useTheme, Divider, makeStyles
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import logoImage from './images/logo.png';
import ProfileImage from './images/profile_picture.jpg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

//NavBar start here
const RandNavBar: React.FC = () => {
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);

  // Checking for mobile view
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuAnchorEl(null);
    setProfileMenuAnchorEl(null);
  };

  const mobileMenuId = 'mobile-menu';

  // Mobile menu
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
      sx={{ zIndex: 1301 }}  // Set a high z-index value to make it appear on top
    >
      <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px' }}>
        <PeopleOutlineIcon sx={{ marginRight: 2 }} /> Find people
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px' }}>
        <LocalPostOfficeIcon
          sx={{
            marginRight: 2
          }} />
        Messages
        <Badge badgeContent={4} color="primary" sx={{ fontSize: '14px', marginLeft: 1 }}>
        </Badge>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}
        sx={{ fontSize: '14px' }}>
        <AccountCircle
          sx={{
            marginRight: 2
          }} />
        My Contact
      </MenuItem>
    </Menu>
  );

  const menuId = 'account-menu';
  // Profile menu
  const renderMenu = (
    <Menu
      anchorEl={profileMenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}
        sx={{ fontSize: '14px' }}>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}
        sx={{ fontSize: '14px' }}>
        My account
      </MenuItem>
    </Menu>
  );



  return (
    <Grid container alignItems="flex-start" justifyContent="flex-end" padding={2}>
      <Grid item xs={12} sm={3} md={12} lg={12}>
        <Box sx={{
          bgcolor: 'pink',
          width: '100%',
          minHeight: { xs: '5vh', md: '12vh', lg: '12vh' },
          borderBottom: '2px solid #ccc'
        }}>
          <Toolbar>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <img src={logoImage} alt="Randevou"
                  height={isMobile ? "30px" : "40px"}
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" noWrap sx={{
                  fontSize: isMobile ? '11px' : '30px',
                }}>
                  Randevou
                </Typography>
              </Grid>
              <Grid item xs>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{
                    fontSize: isMobile ? '11px' : '18px',
                    color: 'grey',
                    backgroundColor: 'white',
                    borderRadius: 0,
                    width: '90%',
                    height: 'auto',
                    ml: isMobile ? 2 : 5,
                    borderColor: 'lightgrey',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                  startAdornment={<SearchIcon fontSize="small" color="disabled" />}
                />
              </Grid>
              {/* navBar menu */}
              {isMobile ? (
                <Grid item>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMobileMenuOpen}
                    sx={{ padding: 2 }}>
                    <MoreIcon />
                  </IconButton>
                </Grid>
              ) : (
                <>
                  <Grid item>
                    <Typography variant="body1"
                      sx={{ fontSize: '18px', ml: 8 }}>
                      Find people
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1"
                      sx={{ fontSize: '18px', ml: 8 }}>
                      Messages
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Badge badgeContent={4} color="info"
                      sx={{
                        '& .MuiBadge-badge': {
                          backgroundColor: 'lightblue',
                          color: 'blue',
                          mr: 2,
                          mt: 1,
                          borderRadius: '0',
                          width: 'auto',
                          padding: '0 6px',
                        },
                      }}>
                      <IconButton size="large" aria-label="show 4 new mails"
                        sx={{
                          fontSize: isMobile ? '14px' : '18px',
                          '& .MuiSvgIcon-root': {
                            backgroundColor: theme.palette.primary.main,
                          }
                        }}>
                      </IconButton>
                    </Badge>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1"
                      sx={{
                        fontSize: '18px', ml: 8
                      }}>
                      My Contacts
                    </Typography>
                  </Grid>
                  {/* Picture profile and menu */}
                  <Grid item>
                    <Box sx={{ position: 'relative' }}>
                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit">
                        <img
                          src={ProfileImage}
                          alt="Profile"
                          style={{
                            height: '25%',
                            width: '25%',
                            borderRadius: '100%',
                            alignItems: 'right',
                            marginLeft: '80px'
                          }} />
                      </IconButton>
                      {/* online botton */}
                      <Grid item>
                        <Box sx={{
                          position: 'relative',
                          bottom: 70,
                          left: 205,
                          width: '5%',
                          height: '5%',
                          borderRadius: '50%',
                          backgroundColor: '  white',
                          display: 'flex',
                          boxSizing: 'border-box'
                        }}>
                          <FiberManualRecordIcon
                            color="primary"
                            sx={{
                              textAlign: 'right',
                              color: 'green',
                              width: '100%',
                              height: '100%',
                            }} />
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          </Toolbar>
          {renderMenu}
          {renderMobileMenu}
        </Box>
      </Grid>
    </Grid>
  );
}
export default RandNavBar;


