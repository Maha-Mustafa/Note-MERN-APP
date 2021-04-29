import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography} from '@material-ui/core';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from './styles';
import {createNote, updateNote} from '../../actions/notes';
const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))
    //getting single note
    const note = useSelector((state) => currentId ? state.notes.find((n)=> n._id === currentId) : null);
    const [noteData, setNoteData] = useState({
        title:'', details: '', category:'todos'
    });
    useEffect(() =>{
      if(note) setNoteData(note);
    }, [note]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(currentId){
          dispatch(updateNote(currentId, {...noteData, name: user?.result?.name}))
        }
        else{
          dispatch(createNote({...noteData, name: user?.result?.name}))
        }
        clear();
    }
    if(!user?.result?.name){
      return(
        <Paper className={classes.paper}>
          <Typography variant='h6' align='center'>
            Please sign In to create a note!
          </Typography>
        </Paper>
      )
    }
    const clear = () =>{
      setCurrentId(null);
      setNoteData({title:'', details: '', category:'todos'})
    }
    return (
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          className={`${classes.root} ${classes.form}`}
        >
          <Typography variant="h6">{currentId ? 'Edit Note' : 'Create a New Note'}</Typography>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            required
            fullWidth
            value={noteData.title}
            onChange={(e) =>
              setNoteData({ ...noteData, title: e.target.value })
            }
          />
          <TextField
            name="details"
            variant="outlined"
            label="Details"
            required
            multiline
            rows={4}
            fullWidth
            value={noteData.details}
            onChange={(e) =>
              setNoteData({ ...noteData, details: e.target.value })
            }
          />
          <FormControl>
            <FormLabel required>Note Category</FormLabel>
            <RadioGroup
              value={noteData.category}
              onChange={(e) =>
                setNoteData({ ...noteData, category: e.target.value })
              }
            >
              <FormControlLabel
                value="money"
                label="Money"
                control={<Radio />}
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminders"
              />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
          <Grid container spacing={1} className={classes.buttonSubmit}>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="small"
                endIcon={<SendOutlinedIcon/>}
              >
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                endIcon={<ClearIcon/>}
                onClick={clear}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
}

export default Form
