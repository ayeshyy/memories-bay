import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

//signin action async means using redux thunk;
export const getPosts = () => async (dispatch) => {
    try {
        // here it will go to the api indexjs file and find required function and passing paramter if required there and axios will make a request to backend at this route and when backend send a response here we destructure that data from response;
        const { data } = await api.fetchPosts();

        // dispatching the data with type AUTH at reducer;
        dispatch({ type: FETCH_ALL, payload: data });
    }catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const updateLikePost = (id) => async (dispatch) => {
    try {
       const { data } = await api.updatedLikePost(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}