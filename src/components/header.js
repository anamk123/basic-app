import React from "react";
import '../css/header.css';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    link: {
        textDecoration: 'none',
        color: 'white'
    }
   
  }));
  

function Header(props) {
    const classes = useStyles();

    return (
        
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton>
          <Button color="inherit"> 
            <Link to="/" className={classes.link}>Home</Link> </Button>
            <Button color="inherit"> <Link to="/products" className={classes.link}>Products</Link> </Button>
            <Button color="inherit"> <Link to="/test-states" className={classes.link}>Test States</Link> </Button>
            <Button color="inherit"> <Link to="/stocks" className={classes.link}>Stocks</Link> </Button>
            <Button color="inherit"> <Link to="/weather" className={classes.link}>weather</Link> </Button>


            </Toolbar>
      </AppBar>

    )
}

export default Header;