export const SHOW_LOADER = 'APP/SHOW_LOADER'
export const HIDE_LOADER = 'APP/HIDE_LOADER'
export const SHOW_ALERT = 'APP/SHOW_ALERT'
export const HIDE_ALERT = 'APP/HIDE_ALERT'

export interface IApplicationState {
    loading: boolean;
    alert: string;
}

export interface IApplicationAction {
    type: string;
    payload: string;
}