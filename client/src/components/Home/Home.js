import React,{useEffect, useState} from 'react'
import {Grow, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import Form from '../Form/Form';
import Notes from '../Notes/Notes';
import { getNotes } from '../../actions/notes'
const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getNotes());
    }, [currentId , dispatch])
    return (
        <Grow in>
          <Container>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Notes setCurrentId={setCurrentId} />
          </Container>
        </Grow>
    );
}

export default Home
