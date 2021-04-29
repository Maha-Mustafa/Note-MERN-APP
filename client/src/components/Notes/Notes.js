import React from 'react'
import NoteCard from '../Notes/NoteCard/NoteCard';
import {CircularProgress, Grid, Paper, Typography} from '@material-ui/core'
import {useSelector} from 'react-redux';
import useStyles from './styles';

const Notes = ({setCurrentId}) => {
    const notes = useSelector(state => state.notes);
    // console.log(notes);
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'))
    return !notes.length ? (
      <CircularProgress />
    ) : (
      <div>
        {(user?.result?.name) && (
          <Typography
          variant="h4"
          component="h6"
          className={classes.heading}
          color="textSecondary"
        >
          MY NOTES
        </Typography>
        )}
        {(user?.result?.name) && (<Grid container alignItems="center" spacing={3}>
          {notes.map((note) => (
            (user?.result?.googleId === note.creator || user?.result?._id === note.creator) && (
              <Grid key={note._id} item xs={12} md={6} lg={4}>
              <NoteCard note={note} setCurrentId={setCurrentId} />
            </Grid>
            )
          ))}
        </Grid>)}
        
      </div>
    );
}

export default Notes
