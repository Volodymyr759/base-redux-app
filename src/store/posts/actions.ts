import { Dispatch } from 'react';
import { hideLoader, showAlert, showLoader } from '../app/actions';
import { IPost } from '../types';
import { CREATE_POST, FETCH_POSTS } from './types';


export function createPost(post: IPost) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {

    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(showLoader())
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const data = await response.json()
            console.log('Posts from server: ', data)
            setTimeout(() => {
                dispatch({ type: FETCH_POSTS, payload: data });
                dispatch(hideLoader());
            }, 1000)
        } catch {
            dispatch(showAlert('Getting posts from server failed'));
            dispatch(hideLoader());
        } 
    }
}


