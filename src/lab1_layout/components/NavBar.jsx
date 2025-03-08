import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem, Drawer, Typography, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/logo.svg';

function NavBar() {
  // Dropdown States
  const [mentorshipAnchor, setMentorshipAnchor] = useState(null);
  const [expertHelpAnchor, setExpertHelpAnchor] = useState(null);
  const [freelancingAnchor, setFreelancingAnchor] = useState(null);
  const [moreAnchor, setMoreAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handlers for opening dropdowns
  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  // Handlers for closing dropdowns
  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  // Mobile Drawer Handlers
  const toggleMobileDrawer = (newOpen) => () => {
    setMobileOpen(newOpen);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between", padding: "10px 20px" }}>
        {/* Logo and Navigation */}
        <Box display="flex" alignItems="center" gap="8px">
          <img src={logo} alt="Codementor logo" width="30px" />
          <Typography variant="h6" component="p">
            codementor
          </Typography>

          {/* Desktop Navigation - Hidden on Mobile */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
            {/* Mentorship Dropdown */}
            <Box>
              <Button color="inherit" onClick={(e) => handleMenuOpen(e, setMentorshipAnchor)}>
                Mentorship <ArrowDropDownIcon />
              </Button>
              <Menu anchorEl={mentorshipAnchor} open={Boolean(mentorshipAnchor)} onClose={() => handleMenuClose(setMentorshipAnchor)}>
                <MenuItem onClick={() => handleMenuClose(setMentorshipAnchor)}>Find a Mentor</MenuItem>
                <MenuItem onClick={() => handleMenuClose(setMentorshipAnchor)}>Become a Mentor</MenuItem>
              </Menu>
            </Box>

            {/* Expert Help Dropdown */}
            <Box>
              <Button color="inherit" onClick={(e) => handleMenuOpen(e, setExpertHelpAnchor)}>
                Expert help <ArrowDropDownIcon />
              </Button>
              <Menu anchorEl={expertHelpAnchor} open={Boolean(expertHelpAnchor)} onClose={() => handleMenuClose(setExpertHelpAnchor)}>
                <MenuItem onClick={() => handleMenuClose(setExpertHelpAnchor)}>Get Quick Help</MenuItem>
                <MenuItem onClick={() => handleMenuClose(setExpertHelpAnchor)}>Hire an Expert</MenuItem>
              </Menu>
            </Box>

            {/* Freelancing Dropdown */}
            <Box>
              <Button color="inherit" onClick={(e) => handleMenuOpen(e, setFreelancingAnchor)}>
                Freelancing <ArrowDropDownIcon />
              </Button>
              <Menu anchorEl={freelancingAnchor} open={Boolean(freelancingAnchor)} onClose={() => handleMenuClose(setFreelancingAnchor)}>
                <MenuItem onClick={() => handleMenuClose(setFreelancingAnchor)}>Find Freelance Jobs</MenuItem>
                <MenuItem onClick={() => handleMenuClose(setFreelancingAnchor)}>Post a Job</MenuItem>
              </Menu>
            </Box>

            {/* More Dropdown */}
            <Box>
              <Button color="inherit" onClick={(e) => handleMenuOpen(e, setMoreAnchor)}>
                More <ArrowDropDownIcon />
              </Button>
              <Menu anchorEl={moreAnchor} open={Boolean(moreAnchor)} onClose={() => handleMenuClose(setMoreAnchor)}>
                <MenuItem onClick={() => handleMenuClose(setMoreAnchor)}>Blog</MenuItem>
                <MenuItem onClick={() => handleMenuClose(setMoreAnchor)}>Community</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>

        {/* Right Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
          <Button color="inherit">Become a mentor</Button>
          <Button color="inherit">Log in</Button>
          <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}>
            Sign up
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton aria-label="Menu button" onClick={toggleMobileDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="top" open={mobileOpen} onClose={toggleMobileDrawer(false)}>
        <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleMobileDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu Items */}
          <MenuItem onClick={toggleMobileDrawer(false)}>Mentorship</MenuItem>
          <MenuItem onClick={toggleMobileDrawer(false)}>Expert help</MenuItem>
          <MenuItem onClick={toggleMobileDrawer(false)}>Freelancing</MenuItem>
          <MenuItem onClick={toggleMobileDrawer(false)}>More</MenuItem>
          <Divider sx={{ my: 2 }} />
          <MenuItem onClick={toggleMobileDrawer(false)}>Become a mentor</MenuItem>
          <MenuItem onClick={toggleMobileDrawer(false)}>Log in</MenuItem>
          <MenuItem>
            <Button variant="contained" fullWidth sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}>
              Sign up
            </Button>
          </MenuItem>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
