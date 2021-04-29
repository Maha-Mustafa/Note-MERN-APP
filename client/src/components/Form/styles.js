import {makeStyles} from '@material-ui/core';
export default makeStyles((theme) =>({
    paper:{
        padding: theme.spacing(2),
        margin: '0 60px',
    }, 
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
    },
    buttonSubmit:{
        marginBottom: 10,
        marginTop: 10
    }
}))