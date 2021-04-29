import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
const drawerWidth  = 240
export default makeStyles((theme) =>({
    root:{
        flexGrow: 1
    },
    title:{
        flexGrow:1
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    appBar:{
        marginBottom: theme.spacing(3)
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    date:{
        flexGrow: 1,
        marginRight: theme.spacing(2)
    },
}))