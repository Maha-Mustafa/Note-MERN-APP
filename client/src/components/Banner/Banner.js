import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    img:{
        width: '100%',
        height: '100%'
    },
  }));
const Banner = () => {
    const classes = useStyles();
    return (
      <>
        <Container>
          <Grid
            container
            spacing={2}
            className={classes.root}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" component="h6" className={classes.title}>
                Take Notes.. Organize your task
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src="banner.svg" className={classes.img} />
            </Grid>
          </Grid>
        </Container>
        <Footer/>
      </>
    );
}

export default Banner
