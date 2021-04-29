import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ 
footer:{
    padding: theme.spacing(3),
    textAlign:'center',
    marginTop: theme.spacing(3),
}
}));
const Footer = () => {
    const classes = useStyles()
    return (
      <div className={classes.footer} style={{backgroundColor:"lavender"}}>
        <Typography variant="body2" color="textSecondary">
          Copyright &copy;
          <Link color="inherit" href="/">
            Notes App
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </div>
    );
}

export default Footer
