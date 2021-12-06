import { IApplicationState } from "./app/types";
import { IPostsAction, IPostsState } from "./posts/types";

export interface IPost {
    id: string;
    title: string;
}

export interface IAppState{
    app: IApplicationState,
    posts: IPostsState,
}