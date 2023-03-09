import {MenuItem} from "@/components/Navbar";

export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';

interface FetchMenuRequestAction {
    type: typeof FETCH_MENU_REQUEST;
}



interface FetchMenuSuccessAction {
    type: typeof FETCH_MENU_SUCCESS;
    payload: {
        items: MenuItem[];
    };
}

interface FetchMenuFailureAction {
    type: typeof FETCH_MENU_FAILURE;
    error: string;
}

export type MenuActionTypes =
    | FetchMenuRequestAction
    | FetchMenuSuccessAction
    | FetchMenuFailureAction;
