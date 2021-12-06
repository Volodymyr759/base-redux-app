import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

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
    // @ts-ignore
    return dispatch => {
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