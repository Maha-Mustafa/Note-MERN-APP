import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        marginTop: 45
      },
    avatar:{
        backgroundColor: (note)=>{
            if(note.category === 'work'){
                return yellow[700]
            }
            if(note.category === 'reminders'){
                return blue[500]
            }
            if(note.category === 'money'){
                return green[500]
            }
            else{
                return pink[500]
            }
        }
    }
})