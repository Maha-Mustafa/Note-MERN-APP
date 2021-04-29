import * as api from '../api/index.js';
import {CREATE, UPDATE, DELETE, FETCH_ALL} from '../constants/actionTypes';
//action creator
export const getNotes = () => async(dispatch)=>{
    try {
        //fetch all data from backend
        const {data} = await api.fetchNotes();
        //dispatch action
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
export const createNote = (note) => async (dispatch) =>{
    try {
        //get all data
        const {data} = await api.createNote(note);
        dispatch({type: CREATE , payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNote = (id, note)=> async(dispatch)=>{
    try {
        const {data} = await api.updateNote(id, note);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error.message); 
    }
}

export const deleteNote = (id) => async(dispatch)=>{
    try {
        await api.deleteNote(id);
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error.message);
    }
   
}