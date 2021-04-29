import {AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer = (state= {authData: null} , action)=>{
    switch (action.type) {
        case AUTH:
            // console.log(action?.data);
            // return state;
            // saving it to local storage so when we refresh browser knows we are logged in
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData:action?.data};
    
        case LOGOUT:
            localStorage.clear();
            return{...state, authData:null};
        default:
            return state;
    }
}

export default authReducer;