import React from 'react';
import {List, ListItem, Divider, ListItemIcon, ListItemText, SwipeableDrawer, Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useHistory} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

const Drawers = ({open ,setOpen, user}) => {
  const classes = useStyles();
  const history = useHistory();
  const menuItems = [
      {
        text: "Home",
        icon: <HomeIcon color="secondary" />,
        path: "/home",
      },
      {
        text: "Sign In",
        icon: <PersonIcon color="secondary" />,
        path: "/auth",
      },
      {
        text: "Main",
        icon: <HomeIcon color="secondary" />,
        path: "/",
      },
  ];
  const menuItem1 = [
    {
      text: "Home",
        icon: <HomeIcon color="secondary" />,
        path: "/home",
    },
    {
      text: "About",
        icon: <HomeIcon color="secondary" />,
        path: "/about",
    },
  ]
    return (
        <SwipeableDrawer
         anchor='left'
         open={open}
         onClose={() => setOpen(false)}
         onOpen={() =>{}}
        >
          <div className={classes.drawerWidth}>
            <Box textAlign='center' p={2}>
            <Typography color='secondary' variant='h6' component='h6'>Menu</Typography>
            </Box>
            <Divider/>
            {!user ? (
               <List>
               {menuItems.map((item) => (
                 <ListItem
                  button
                  key={item.text}
                  onClick={() => history.push(item.path)}
                 >
                   <ListItemIcon>{item.icon}</ListItemIcon>
                   <ListItemText primary={item.text}/>
                 </ListItem>
               ))}
             </List>
            ) : (
              <List>
              {menuItem1.map((item) => (
                <ListItem
                 button
                 key={item.text}
                 onClick={() => history.push(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItem>
              ))}
            </List>
            )}
          </div>
        </SwipeableDrawer>
    )
}

export default Drawers
