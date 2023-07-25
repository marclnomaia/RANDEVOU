import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

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
import logoImage from './images/logo.png'; 
import { Avatar } from '@mui/material';
//import AdbIcon from '@mui/icons-material/Adb';
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.3),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

{/*const whiteIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
}));*/}
const BlueIconButton = styled(IconButton)(({ theme }) => ({
  color: 'blue',
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

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
      <BlueIconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit">
                <Badge badgeContent={4} color="error">
                  <img src={"./images/logo.png"} alt="Logo" height="24" />
                </Badge>
              </BlueIconButton>
        <Typography variant="body1" style={{ color: 'black' }}>
          Ravenour
        </Typography>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="Find people"
          color="inherit"
        >
          <Badge> {/*badgeContent={17} color="error"*/}
            <div style={{ color: 'blue' }}>
              <img src="./images/logo.png" alt="Meeting People" height="24" />
            </div>
          </Badge>
        </IconButton>
        <Typography variant="h6" style={{ color: 'black' }}>
</Typography>

      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
        >
          <AccountCircle style={{ color: 'black' }} />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid black' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
        <Typography
  variant="h4"
  noWrap
  component="a"
  href="/"
  sx={{
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'black', 
    textDecoration: 'none',
    alignItems: 'center',
  }}>
{/*logoImage*/}
  <img src={logoImage} alt="Logo" height="24" style={{ marginRight: '8px' }} />
  Ravenour
</Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black', 
                textDecoration: 'none',
              }}
            >
              Randevour
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}/>
            </Search>
            <Box sx={{ flexGrow: 3 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton>
                <Badge >
                  <Typography style={{ color: 'black' }}>Find people</Typography>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="default">

                <Badge badgeContent={4} color="error">
                  <Typography style={{ color: 'black' }}>Messages</Typography>
                </Badge>
              </IconButton>
              <IconButton>
                <Badge>
                  <Typography style={{ color: 'black' }}>My contact</Typography>
                </Badge>
              </IconButton>
              <IconButton>
              <Avatar alt="Remy Sharp" imgProps={{ src: "./images/profile.png" }} />
    </IconButton> 
            </Box>
            {/*responsible menu*/}
            <Box sx={{ display: { xs: 'flex', md: 'none'} }}>
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
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
