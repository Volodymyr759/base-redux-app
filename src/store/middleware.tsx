import { Dispatch } from 'react';
import { Action } from 'redux';
import { showAlert } from './app/actions';
import { CREATE_POST } from './posts/types';
import { IPost } from './types';

const forbidden = ['php', 'spam']

interface IPostAction extends Action {
    type: string;
    payload: IPost;
}

export function forbiddenWordsMiddleware({ dispatch }: any) {
    console.log('dispatch: ', dispatch)
    return function (next: Dispatch<IPostAction>) {
        return function (action: IPostAction) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('Spam found, change your post.'))
                }
            }
            return next(action)
        }
    }
}