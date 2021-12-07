import { Dispatch } from 'react';
import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

interface IAction {
    type: string;
    payload?: string;
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text: string) {
    return (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000);
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}