import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core'
import { DeleteOutlineRounded } from '@material-ui/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteNote} from '../../../actions/notes';
import React from 'react'
import useStyles from './styles';

const NoteCard = ({note, setCurrentId}) => {
    const classes = useStyles(note);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))
    return (
        <Card elevation={1} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <div>
              {(user?.result.googleId === note?.creator ||
                user?.result._id === note?.creator) && (
                <IconButton onClick={() => setCurrentId(note._id)}>
                  <MoreHorizIcon />
                </IconButton>
              )}
              {(user?.result.googleId === note?.creator ||
                user?.result._id === note?.creator) && (
                <IconButton onClick={() => dispatch(deleteNote(note._id))}>
                  <DeleteOutlineRounded />
                </IconButton>
              )}
            </div>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary">
            {note.details}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {moment(note.createdAt).fromNow()}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default NoteCard
