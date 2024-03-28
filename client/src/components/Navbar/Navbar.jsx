import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {  useSelector } from "react-redux";
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsGrid1X2Fill, BsSearch, BsJustify}
 from 'react-icons/bs'
import './Navbar.scss'
import Search from '../Search/Search'
import Dashboard from '../../pages/Dashboard';
import { useNavigate } from 'react-router-dom';
import 
{  BsFillGrid3X3GapFill, }
 from 'react-icons/bs'
 import { FaTasks } from "react-icons/fa";
 import { BiTask } from "react-icons/bi";
 import { MdIncompleteCircle } from "react-icons/md";
 import { GrInProgress } from "react-icons/gr";
 import { MdOutlineAutoAwesomeMotion } from "react-icons/md";


const drawerWidth = 240;

function Navbar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [desktopOpen, setDesktopOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDesktopToggle = () => {
    // if (!isClosing) {
      setDesktopOpen(!desktopOpen);
    // }
  }

  const drawer = (
    <div>
      <Toolbar>Task Manager </Toolbar>

      <List>
      <ListItem key={'itemName'} disablePadding>
    <ListItemButton onClick={() => navigate("/dashboard")}>
    <BsGrid1X2Fill className='icon'/> 
      <ListItemText sx={{marginLeft: 2}}
      primary={'  Dashboard'} />
    </ListItemButton>
  </ListItem>
  <ListItem key={'itemName'} disablePadding>
    <ListItemButton onClick={() => navigate("/tasks")}>
    <FaTasks className='icon'/>
      <ListItemText sx={{marginLeft: 2}}
      primary={'  Tasks'} />
    </ListItemButton>
  </ListItem>
  <ListItem key={'itemName'} disablePadding>
    <ListItemButton >
    <MdIncompleteCircle className='icon'/> 
      <ListItemText sx={{marginLeft: 2}}
      primary={'  Completed'} />
    </ListItemButton>
  </ListItem>
  <ListItem key={'itemName'} disablePadding>
    <ListItemButton >
    <GrInProgress className='icon'/>
      <ListItemText sx={{marginLeft: 2}}
      primary={'  In progress'} />
    </ListItemButton>
  </ListItem>
  <ListItem key={'itemName'} disablePadding>
    <ListItemButton >
    <MdOutlineAutoAwesomeMotion className='icon'/>
      <ListItemText sx={{marginLeft: 2}}
      primary={'  To Do'} />
    </ListItemButton>
  </ListItem>
  <ListItem key={'itemName'} disablePadding>
    <ListItemButton >
    <BsFillGrid3X3GapFill className='icon'/>
      <ListItemText sx={{marginLeft: 2}}
      primary={'Categories'} />
    </ListItemButton>
  </ListItem>
      </List>
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className='header-left'>
            <Search/> 
            
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          // open={false}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Navbar;