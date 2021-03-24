import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchFilms from '../search/SearchFilms'



const useStyles = makeStyles((theme) => ({
    toolbar: {
      display:"flex",
      justifyContent: "space-between",
      [theme.breakpoints.down('xs')]: {
        display:"block",
        alignItems:"center",
        justifyContent:"center",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: "center",
    },
    link:{ 
      textDecoration: "none",
      color: "inherit",
    }, 
  }));
  


const Header = () => {

    const classes = useStyles();

    return (
        <div >
        <AppBar position="static">
          <Toolbar id='back-to-top-anchor' className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to='/'>Home</Link>
            </Typography>
            <SearchFilms/>
            <Button color="inherit" className={classes.title}>
                <Link className={classes.link} to='/myList'>Favorites</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header