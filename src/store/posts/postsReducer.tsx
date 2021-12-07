// import Post from '../../components/Post/Post';
import { CREATE_POST, FETCH_POSTS, IPostsAction, IPostsState } from './types'
import { IPost } from '../types';

const initialState: IPostsState = {
    posts: [] as IPost[],
    fetchedPosts: [] as IPost[]
}

export const postsReducer = (state = initialState, action: IPostsAction) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat(action.payload) };
        case FETCH_POSTS:
            return { ...state, fetchedPosts: action.payload };
        default: return state
    }
}