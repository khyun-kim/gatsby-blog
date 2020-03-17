import React from "react"

import "../css/Header.css"

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar:{
    alignItems: 'flex-start',
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow:1,padding:0,
    margin:0,
    alignSelf:'flex-end'
  },
  menuIcon :{
    alignSelf:'flex-end',
    padding:0,
    margin:0
  }
}))

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger(undefined);
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar color="#ffffff">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h6">
              {props.title}
            </Typography>
            <IconButton className={classes.menuIcon} edge="end" color="inherit" aria-label="menu" onClick={handleMenu}
              aria-controls="menu-appbar"
              aria-haspopup="true">
              <MenuIcon />
            </IconButton>
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>About Me</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}


export default Header
