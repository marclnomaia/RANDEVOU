
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import logoImage from './components/images/logo.png';
import { Badge, IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ProfileImage from '../components/images/profile_picture.jpg';
import Grid from '@mui/material/Grid';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


// define the source of your RandBar here

//search box
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 0,
  backgroundColor: 'white',
  border: '1px solid #ccc',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.3),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(5),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '30%',

  },
}));

//inside search
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70ch',
    },
  },
}));



export default function PrimarySearchAppBar() {


  const LogoImage = styled('img')({
    width: '100%',
    maxWidth: '50px',
  });
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <PeopleOutlineIcon />
          </Badge>
        </IconButton>
        <p>Find People</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
          aria-label="show 4 new mails"
        >
          <Badge badgeContent={4} color="error">
            <LocalPostOfficeIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>My Contacts</p>
      </MenuItem>
    </Menu>
  );




  return (
    <Box sx={{ flexGrow: 1, fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '14' }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #D3D3D3' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container alignItems="center">
              <Grid item xs={4} md={3}>
                <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                    alignItems: 'center',
                    marginLeft: '10px',
                    fontSize: '22px',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                  }}
                >
                  <LogoImage src={logoImage} alt="Logo" style={{ marginLeft: '40px', margin: '15px' }} />
                  Randevou
                </Typography>
              </Grid>
              <Grid item xs={8} md={7}>
                <Search>
                  <SearchIconWrapper sx={{ color: 'grey' }}>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search', color: 'black' }}
                  />
                </Search>
              </Grid>
              <Grid item xs={8} md={2}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div>
                    <IconButton onClick={handleClick}>
                      <Badge>
                        <Typography style={{ color: 'black', margin: '10px', fontSize: '16px', fontFamily: 'Helvetica, Arial, sans-serif', marginTop: '18px', marginRight: '20px' }}>Find people</Typography>
                      </Badge>
                    </IconButton>
                    {showOptions && (
                      <div style={{
                        border: '1px solid #ccc',
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        position: 'fixed',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        marginTop: '20px'

                      }}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <br />
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      </div>
                    )}
                  </div>
                  <IconButton size="large" aria-label="show 4 new mails" color="info">
                    <Typography style={{ color: 'black', margin: '10px', fontSize: '16px', fontFamily: 'Helvetica, Arial, sans-serif' }}>
                      Messages
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <Badge>
                      <Typography style={{ color: 'black', margin: '10px', fontSize: '16px', fontFamily: 'Helvetica, Arial, sans-serif' }}>My contact</Typography>
                    </Badge>
                  </IconButton>
                  <IconButton style={{ marginRight: '60px', position: 'relative' }} onClick={handleProfileMenuOpen}>
                    <img src={ProfileImage} alt="Profile" style={{ borderRadius: '100%', height: '60px', width: '60px', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute',
                      top: 6,
                      right: 7,
                      height: '18px',
                      width: '18px',
                      borderRadius: '50%',
                      boxShadow: '0 0 0 2px white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FiberManualRecordIcon style={{
                        color: 'green',
                        height: '24px',
                        width: '24px'
                      }} />
                    </div>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ display: { xs: 'flex', md: 'none', color: 'black' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}></Container>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
