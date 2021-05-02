import { takeLatest, call, put } from "redux-saga/effects";
import constant from './NewsConstant';
import { createNews, editNews, deleteNews, getAllNews, getSingleNews } from "../../api/NewsAPI";

function* getAllNewsWorker(action) {
	try {
		const response = yield call(getAllNews, ...action.payload);
		yield put({ type: constant.RECEIVE_GET_ALL_NEWS, payload: response });

		// Execute last argument if it a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_GET_ALL_NEWS, payload:error });
	}
}

function* getSingleNewsWorker(action) {
	try {
		const response = yield call(getSingleNews, ...action.payload);
		yield put({ type: constant.RECEIVE_GET_SINGLE_NEWS, payload: response });

		// Execute if last argument is a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_GET_SINGLE_NEWS, payload:error });
	}
}

function* createNewsWorker(action) {
	try {
		const response = yield call(createNews, ...action.payload);
		yield put({ type: constant.RECEIVE_CREATE_NEWS, payload: response });

		// Execute if last argument is a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_CREATE_NEWS, payload:error });
	}
}

function* editNewsWorker(action) {
	try {
		const response = yield call(editNews, ...action.payload);
		yield put({ type: constant.RECEIVE_EDIT_NEWS, payload: response });

		// Execute if last argument is a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_EDIT_NEWS, payload:error });
	}
}

function* deleteNewsWorker(action) {
	try {
		const response = yield call(deleteNews, ...action.payload);
		yield put({ type: constant.RECEIVE_DELETE_NEWS, payload: response });

		// Execute if last argument is a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_DELETE_NEWS, payload:error });
	}
}

export default function* watcherSaga() {
	yield takeLatest(constant.GET_ALL_NEWS, getAllNewsWorker);
	yield takeLatest(constant.GET_SINGLE_NEWS, getSingleNewsWorker);
	yield takeLatest(constant.CREATE_NEWS, createNewsWorker);
	yield takeLatest(constant.EDIT_NEWS, editNewsWorker);
	yield takeLatest(constant.DELETE_NEWS, deleteNewsWorker);
}