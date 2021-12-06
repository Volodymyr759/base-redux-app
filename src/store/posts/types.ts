import { IPost } from "../types";

export const CREATE_POST = 'POST/CREATE_POST';
export const FETCH_POSTS = 'POST/FETCH_POSTS';

export interface IPostsState {
    posts: IPost[];
    fetchedPosts: IPost[];
}

export interface IPostsAction {
    type: string;
    payload: IPost[];
}