import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import noteRoutes from './routes/notes.js';
import userRoutes from './routes/user.js';
const app = express();
dotenv.config();
//setting up body parser
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.use(cors());
app.use('/notes',noteRoutes);
app.use('/user', userRoutes);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
 .then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
 .catch((error) => console.log(error.message));
 
mongoose.set('useFindAndModify', false);