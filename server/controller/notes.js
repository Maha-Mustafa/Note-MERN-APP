import mongoose from 'mongoose';
import Notes from '../models/notes.js';

export const getNotes = async(req, res) =>{
    // res.send("It works!");
    try {
        const notes = await Notes.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const createNotes = async(req, res)=>{
    const note = req.body;
    const newNote = new Notes({...note, creator:req.userId, createdAt: new Date().toISOString()});
    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 

export const updateNote = async (req, res) =>{
    //getting the id
    const {id: _id} = req.params;
    const note = req.body;
    //checking if id doesn't matches with mongoose id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No note with that id');
    const updatedNote = await Notes.findByIdAndUpdate(_id, {...note, _id}, {new:true});
    res.send(updatedNote);
}

export const deleteNote = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No note with that id');
    await Notes.findByIdAndDelete(id);
    res.json({message: 'Note deleted successfully'})
}