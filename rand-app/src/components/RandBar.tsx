import React from 'react';
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
import logoImage from './images/logo.png'; 
import { Badge, IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ProfileImage from '../components/images/profile_picture.jpg';
import Grid from '@mui/material/Grid';

// define the source of your RandBar here
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
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5), 
    width: 'auto',
  },
  [theme.breakpoints.down('xs')]: {
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const LogoImage = styled('img')({
    width: '100%',
    maxWidth: '50px',
  });

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
      <IconButton
  size="large"
  aria-label="show 4 new mails"
  color="inherit">
  <Badge badgeContent={4} color="info">
    <img src={"./images/logo"} alt="Logo" height="12" />
  </Badge>
          <Badge> 
              <img src="./images/logo.png" alt="logo" style={{ height: '32px', width: '32px' }} />         
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
    <Box sx={{ flexGrow: 1 }}>
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
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                    alignItems: 'center',
                    marginLeft: '10px',
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
                  <IconButton>
                    <Badge>
                      <Typography style={{ color: 'black', margin: '10px', fontSize: '20px' }}>Find people</Typography>
                    </Badge>
                  </IconButton>
                  <IconButton size="large" aria-label="show 4 new mails" color="info">
                    <Typography style={{ color: 'black', margin: '10px', fontSize: '20px' }}>
                      Messages <span style={{ backgroundColor: '#D0F4FE', padding: '2px', borderRadius: '1px', color: 'blue', width: '30px', display: 'inline-block', textAlign: 'center', fontSize: '15px' }}>{4}</span>
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <Badge>
                      <Typography style={{ color: 'black', margin: '10px', fontSize: '20px' }}>My contact</Typography>
                    </Badge>
                  </IconButton>
                  <IconButton style={{ marginRight: '60px', position: 'relative' }}>
                    <img src={ProfileImage} alt="Profile" style={{ borderRadius: '100%', height: '60px', width: '60px', objectFit: 'cover' }} />
                   <FiberManualRecordIcon style={{ color: 'green', position: 'absolute', top: 6, right: 7, height: '20px', width: '20px' }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            {/* Responsible menu */}
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
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
