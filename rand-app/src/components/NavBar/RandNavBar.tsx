import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, InputBase, Badge,
  Grid, Box, Menu, MenuItem, useMediaQuery, useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import logoImage from '../images/logo.png';
import ProfileImage from '../images/profile_picture.jpg';
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
        <LocalPostOfficeIcon sx={{ marginRight: 2 }} /> Messages
        <Badge badgeContent={4} color="primary" sx={{ fontSize: '14px', marginLeft: 1 }}>

        </Badge>
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px' }}>
        <AccountCircle sx={{ marginRight: 2 }} /> My Contact
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
      <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px' }}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px' }}>My account</MenuItem>
    </Menu>
  );

  return (
    <div
      style={{ padding: '0px' }}>
      <Grid container spacing={0} display="flex" justifyContent="start-end">
        <Grid item xs={12} sm={3} md={12}>
          <Box sx={{
            bgcolor: 'lightBlue',
            width: '100%',

            height: { xs: '25vh', md: '40vh' }
          }}>
            <AppBar position="static" color="default" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
              <Toolbar>
                <Grid container alignItems="center">
                  <Grid item xs={2} md={1} sx={{ padding: 2, ml: isMobile ? '-30px' : '20px' }}>
                    <img src={logoImage} alt="Randevou" height={isMobile ? "30px" : "40px"} />
                  </Grid>
                  <Grid item xs={3} md={2} sx={{ padding: 2, ml: isMobile ? '-10px' : '-80px' }}>
                    <Typography variant="h6" noWrap sx={{ fontSize: isMobile ? '11px' : '30px' }}>
                      Randevou
                    </Typography>
                  </Grid>
                  <Grid   ////Search Box////
                    item xs={4} md={4} sx={{ padding: 2, ml: isMobile ? '60px' : '-110px' }}>
                    <InputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      sx={{
                        fontSize: isMobile ? '11px' : '18px',
                        color: 'grey',
                        backgroundColor: 'white',
                        borderRadius: 0,
                        width: isMobile ? '100px' : '220px',
                        height: isMobile ? '22px' : '40px',
                        minWidth: '2ch',
                        borderColor: 'lightgrey',
                        borderWidth: '1px',
                        borderStyle: 'solid'
                      }}
                      startAdornment={<SearchIcon fontSize="small" color="disabled" />}
                    />
                  </Grid>

                  {/*//navBar menu//*/}
                  {isMobile && (
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleMobileMenuOpen}
                      sx={{ padding: 1 }}
                    >
                      <MoreIcon />
                    </IconButton>
                  )}

                  {!isMobile && (
                    <>
                      <Grid item sx={{ padding: 2, ml: isMobile ? '60px' : '250px' }}>
                        <Typography variant="body1" sx={{ fontSize: isMobile ? '14px' : '18px' }}>
                          Find people
                        </Typography>
                      </Grid>
                      <Grid item sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" sx={{ fontSize: isMobile ? '14px' : '18px', marginRight: 1 }}>
                          Messages
                        </Typography>
                        <Badge
                          badgeContent={4}
                          color="info"
                          sx={{
                            '& .MuiBadge-badge': {
                              backgroundColor: 'lightblue',
                              color: 'blue',
                              mr: isMobile ? 2 : 2,
                              mt: isMobile ? 1 : 1,

                              borderRadius: '0',
                              width: 'auto',
                              padding: '0 6px',
                            },
                          }}
                        >
                          <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            sx={{
                              fontSize: isMobile ? '14px' : '18px',
                              '& .MuiSvgIcon-root': {
                                backgroundColor: theme.palette.primary.main,
                              },
                            }}
                          >
                          </IconButton>
                        </Badge>
                      </Grid>
                      <Grid item sx={{ padding: 2 }}>
                        <Typography variant="body1" sx={{ fontSize: isMobile ? '14px' : '18px' }}>
                          My Contact
                        </Typography>
                      </Grid>
                      <Grid //Picture profile and menu//
                        item sx={{ padding: 2 }}>
                        <Box sx={{ position: 'relative' }}>
                          <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                          >
                            <img
                              src={ProfileImage}
                              alt="Profile"
                              style={{
                                height: '50px',
                                width: '50px',
                                borderRadius: '100%',
                                border: `2px solid white`,
                              }}
                            />
                          </IconButton>

                          <Box //online botton
                            sx={{
                              position: 'absolute',
                              bottom: '40px',
                              right: '-10px',
                              width: 'calc(1em + 4px)',
                              height: 'calc(1em + 4px)',
                              borderRadius: '50%',
                              backgroundColor: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxSizing: 'border-box',
                            }}
                          >
                            <FiberManualRecordIcon
                              color="primary"
                              sx={{
                                color: 'green',
                                width: '1em',
                                height: '1em',
                                margin: '2px',
                              }}
                            />
                          </Box>
                        </Box>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Toolbar>
              <Box bgcolor="lightgray" height="1px" />
            </AppBar>
            {renderMenu}
            {renderMobileMenu}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default RandNavBar;

