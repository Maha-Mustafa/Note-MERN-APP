import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
    heading:{
        marginTop: 40,
        borderBottom: '1px solid #efefef',
        textAlign: 'center'
    },
    paper:{
        padding: theme.spacing(2),
        margin: '20px 60px',
        height: 200,
        textAlign: 'center',
        backgroundColor: purple
    }, 
}))