import React,{useEffect, useState} from 'react';
import decode from 'jwt-decode';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography, IconButton, Avatar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyle from './styles';
import {useDispatch} from 'react-redux';
import {format} from 'date-fns'
import Drawers from '../Drawers.js/Drawers';
import { LOGOUT } from '../../constants/actionTypes';

const Navbar = () => {
   const classes = useStyle();
   const history = useHistory();
   const location = useLocation();
   const dispatch = useDispatch();
   const [open, setOpen] = useState(false);
    const[user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // console.log(user);
    const logout = () =>{
      dispatch({type: LOGOUT});
      history.push('/');
      setUser(null);
    }
    useEffect(() => {
      const token = user?.token;
      // checking for expiry
      if(token){
        const decodedToken = decode(token);
        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            {user ? (
              <>
                <IconButton
                  className={classes.icon}
                  onClick={() => setOpen(true)}
                >
                  <MenuIcon color="secondary" fontSize="large" />
                </IconButton>
                <Typography className={classes.date}>
                  Today is the {format(new Date(), "do MMMM Y")}
                </Typography>
                <div className={classes.profile}>
                  <Avatar
                    className={classes.purple}
                    alt={user.result.name}
                    src={user.result.imageUrl}
                  >
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">
                    {user.result.name}
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.logout}
                    color="secondary"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <IconButton
                  className={classes.icon}
                  onClick={() => setOpen(true)}
                >
                  <MenuIcon color="secondary" fontSize="large" />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Notes
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to="/auth"
                >
                  Sign In
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Drawers open={open} setOpen={setOpen} user={user} />
      </div>
    );
}

export default Navbar
