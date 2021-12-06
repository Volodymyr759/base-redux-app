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
            const response = await fetch('htps://jsonplaceholder.typicode.com/posts?_limit=5')
            const data = await response.json()
            setTimeout(() => {
                dispatch({ type: FETCH_POSTS, payload: data })
            }, 1000)
        } catch {
            dispatch(showAlert('Getting posts from server failed'))
        } finally {
            dispatch(hideLoader())
        }
    }
}


