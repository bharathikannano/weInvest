import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchData);
        console.log(response);
        const cData = response.data;

        // dispatch a success action to the store with the new cData
        yield put({
            type: "API_CALL_SUCCESS",
            cData
        });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({
            type: "API_CALL_FAILURE",
            error
        });
    }
}

// function that returns api response
function fetchData() {
    return axios({
        method: "get",
        url: "http://localhost:5555/"
    });
}