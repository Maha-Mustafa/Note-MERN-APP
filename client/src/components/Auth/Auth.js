import React, { useState } from 'react'
import {Avatar, Button, Container, Grid, Paper, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Input from './Input';
import {GoogleLogin} from 'react-google-login';
import Icon from './icon';
import {AUTH} from '../../constants/actionTypes';
import {signup, signin} from '../../actions/auth';

const initialState = {firstName:"", lastName:"", password:"", email:"", confirmPassword:""};
const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const[isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const[formData, setFormData] = useState(initialState);
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(formData);
        if(isSignup){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData, history))
        }
    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleShowPassword = () =>{
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    const switchMode = () =>{
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false)
    }
    const googleSuccess = async(res) =>{
        // console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({type: AUTH, data:{result, token}});
            history.push('/home')
        } catch (error) {
            console.log(error);
        }
    } 
    const googleFailure = () =>{
        console.log("Google Sign In was unsuccessful. Try again later")
    }
    return (
       <Container component='main' maxWidth='xs'>
           <Paper className={classes.paper} elevation={3}>
               <Avatar className={classes.avatar}>
                   <LockOutlinedIcon/>
               </Avatar>
               <Typography variant='h5'>
                   {isSignup ? "Sign Up" : "Sign In"}
               </Typography>
               {/* form */}
               <form onSubmit={handleSubmit} className={classes.form}>
                   <Grid container spacing={2}>
                      {isSignup && (
                          <>
                          <Input
                           name='firstName'
                           label='First Name'
                           handleChange={handleChange}
                           autoFocus
                           half
                          />
                          <Input
                           name='lastName'
                           label='Last Name'
                           handleChange={handleChange}
                           autoFocus
                           half
                          />
                          </>
                      )}
                      {/* fields for both signIn and signUp */}
                      <Input
                       name='email'
                       label='Email Address'
                       handleChange={handleChange}
                       type='email'
                      />
                      <Input
                       name='password'
                       label='Password'
                       handleChange={handleChange}
                       type={showPassword ? 'text' :'password'}
                       handleShowPassword={handleShowPassword}
                      />
                       {/* password confirm field only when on the signup screen */}
                       {isSignup && (
                          <Input
                          name='confirmpassword'
                          label='Repeat Password'
                          handleChange={handleChange}
                          type='password'
                         /> 
                       )}
                   </Grid>
                   <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='secondary'
                    className={classes.submit}
                   >
                       {isSignup ? "Sign Up" : "Sign In"}
                   </Button>
                   <GoogleLogin
                    clientId='476216628005-k5k0t0mtkqhelofsib3iegums1c8k6lu.apps.googleusercontent.com'
                    render={(renderProps) =>(
                        <Button
                         className={classes.googleButton}
                         color='secondary'
                         fullWidth
                         onClick={renderProps.onClick}
                         disabled={renderProps.disabled}
                         startIcon={<Icon/>}
                         variant='contained'
                        >
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                   >
                   </GoogleLogin>
                   <Grid container justify='flex-end'>
                       <Grid item>
                           <Button onClick={switchMode}>
                               {isSignup ? "Already have an account? Sign In" : "Don't have an account Sign Up"}
                            </Button>
                       </Grid>
                   </Grid>
               </form>
           </Paper>
       </Container>
    )
}

export default Auth
