import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    name:{
        type: String
    },
    creator: {
        type: String
    },
    createdAt:{
        type: Date,
        default : new Date()
    }
});

const Notes = mongoose.model('Notes', noteSchema);
export default Notes;