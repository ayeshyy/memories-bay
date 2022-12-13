import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes.js';

//signin action async means using redux thunk;
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // here it will go to the api indexjs file and find signin function and passing formData there and axios will make a request to backend at this route and when backend send a response here we destructure that data from response;
        const { data } = await api.signIn(formData);

        // dispatching the data with type AUTH at reducer;
        dispatch({ type: AUTH, data });

        // after the signin done redirecting the to root path or home page;
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (error) {
        console.log(error);    
    }
}