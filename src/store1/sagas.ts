import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE } from './actions';
import {Menu} from "@/components/Navbar";

export function* fetchMenu(): Generator<any, void, Menu> {
    try {
        const res = yield call(() => axios.get<Menu>('https://acecmsmock.z6.web.core.windows.net/api/content/2'));
        const response = res.data;
        const items = response.items;
        yield put({ type: FETCH_MENU_SUCCESS, payload: { items } });
    } catch (error) {
        yield put({ type: FETCH_MENU_FAILURE, error: error });
    }
}

export default function* rootSaga() {
    yield takeLatest(FETCH_MENU_REQUEST, fetchMenu);
}
