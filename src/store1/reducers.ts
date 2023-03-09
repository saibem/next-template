import { combineReducers } from 'redux';
import { FETCH_MENU_SUCCESS } from './actions';
import {MenuItem} from "@/components/Navbar";

interface MenuState {
    items: MenuItem[];
}

interface RootState {
    menu: MenuState;
}

interface FetchMenuSuccessAction {
    type: typeof FETCH_MENU_SUCCESS;
    payload: {
        items: MenuItem[];
    };
}

const initialState: MenuState = {
    items: [],
};

const menuReducer = (state = initialState, action: FetchMenuSuccessAction) => {
    switch (action.type) {
        case FETCH_MENU_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers<RootState>({
    menu: menuReducer,
});


export default rootReducer;
