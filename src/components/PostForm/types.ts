import { IPost } from "../../store/types";

export type Props = {
    id?: string;
    title: string;
    alert: string | null;
    showAlert: (text: string) => void;
    createPost: (post: IPost) => { type: string; payload: IPost };
}

export type State = {
    title: string;
}