import { IPost } from "../../store/types";

export type Props = {
    alert: string;
    showAlert: (text: string) => void;
    createPost: (post: IPost) => { type: string; payload: IPost };
}

export type State = {
    title: string;
}