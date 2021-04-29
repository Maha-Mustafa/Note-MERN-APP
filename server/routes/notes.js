import express from 'express';
import {getNotes, createNotes, updateNote, deleteNote} from '../controller/notes.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', auth ,getNotes);
router.post('/', auth, createNotes);
router.patch('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);

export default router;