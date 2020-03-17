import React from "react"
import {Link} from "gatsby"
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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  toolbar: {
    alignItems: 'flex-start',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  title: {
    flexGrow: 1, padding: 0,
    margin: 0,
    alignSelf: 'flex-end',
    marginLeft:theme.spacing(3)
  },
  menuIcon: {
    alignSelf: 'flex-end',
    padding: 0,
    margin: 0,
  },
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
const linkStyle = {margin:"auto",textDecoration:"none",boxShadow:"",color:"black"}

function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const open = Boolean(anchorEl);


  function resize() {
    const flag = window.innerWidth < 900;
    if(isMobile !== flag) {
      setIsMobile(flag);
    }
  }
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  });

  const mobileMenu = 
    <>
    <IconButton className={classes.menuIcon} edge="end" color="inherit" aria-label="menu" onClick={handleMenu}
      aria-controls="menu-appbar"
      aria-haspopup="true">
      <MenuIcon />
    </IconButton>

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
      <Link style={linkStyle} to="/"><MenuItem>Home</MenuItem></Link>
      <Link style={linkStyle} to="/blog"><MenuItem>Blog</MenuItem></Link>
      <Link style={linkStyle} to="/about"><MenuItem>About Me</MenuItem></Link>
    </Menu></> 
    const desktopMenu = <>
    <Link style={linkStyle} to="/"><Button >Home</Button></Link>
    <Link style={linkStyle} to="/blog"><Button>Blog</Button></Link>
    <Link style={linkStyle} to="/about"><Button>About Me</Button></Link>
    </>;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar color="#F2E3EA">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h6">
              {props.title}
            </Typography>
            {isMobile ? mobileMenu : desktopMenu}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}


export default Header
