import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import logoImage from '../images/logo.png';
import ProfileImage from '../images/profile_picture.jpg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

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

  //image logo//
  const LogoImage = styled('img')({
    width: '100%',
    maxWidth: '50px',
  });
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  }

  //menu profile picture//
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

  //mobile menu//
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
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box sx={{ flexGrow: 1, fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '14' }}>
          <AppBar position="static" sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none', borderBottom: '1px solid #D3D3D3'
          }}>
            <Toolbar>
              <LogoImage src={logoImage} alt="Logo" style={{ margin: '15px' }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  letterSpacing: '.3rem',
                  color: 'black',
                  textDecoration: 'none',
                  alignItems: 'center',
                  marginLeft: isMobile ? '5px' : '10px',
                  fontSize: isMobile ? '10px' : '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}>
                Randevou
              </Typography>

              <Search>
                <SearchIconWrapper sx={{ color: 'grey' }}>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search', color: 'black' }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton onClick={handleClick}>
                  <Badge>
                    <Typography style={{
                      color: 'black', margin: '10px', fontSize: '16px',
                      fontFamily: 'Helvetica, Arial, sans-serif', marginTop: '18px', marginRight: '20px'
                    }}>
                      Find people
                    </Typography>
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

                <IconButton size="large" aria-label="show 4 new mails" color="info">
                  <Typography style={{
                    color: 'black', margin: '10px', fontSize: '16px',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                  }}>
                    Messages
                  </Typography>
                </IconButton>
                <IconButton>
                  <Badge>
                    <Typography style={{
                      color: 'black', margin: '10px', fontSize: '16px',
                      fontFamily: 'Helvetica, Arial, sans-serif'
                    }}>My contact</Typography>
                  </Badge>
                </IconButton>
                <IconButton style={{ marginRight: '60px', position: 'relative' }} onClick={handleProfileMenuOpen}>
                  <img src={ProfileImage} alt="Profile" style={{
                    borderRadius: '100%', height: '60px',
                    width: '60px', objectFit: 'cover'
                  }} />
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
              {/*3 dots mobile config*/}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                >
                  <MoreIcon style={{ color: 'black' }} />
                </IconButton>

              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      </Grid>
    </Grid>
  );
}