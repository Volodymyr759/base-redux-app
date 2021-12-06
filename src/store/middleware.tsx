import { showAlert } from './app/actions';
import { CREATE_POST } from './posts/types';

const forbidden = ['php', 'spam']

// @ts-ignore
export function forbiddenWordsMiddleware({ dispatch }) {
    // @ts-ignore
    return function (next) {
        // @ts-ignore
        return function (action) {
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