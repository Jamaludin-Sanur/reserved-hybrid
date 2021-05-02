import { takeLatest, call, put } from "redux-saga/effects";
import constant from './UserConstant';
import authConstant from '../auth/AuthConstant';
import { getAllUser, getSingleUser, editUser } from "../../api/UserAPI";

function* getAllUserWorker(action) {
	try {
		const response = yield call(getAllUser, ...action.payload);
		yield put({ type: constant.RECEIVE_GET_ALL_USER, payload: response });

		// Execute last argument if it a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_GET_ALL_USER, payload:error });
	}
}

function* getSingleUserWorker(action) {
	try {
		const response = yield call(getSingleUser, ...action.payload);
		yield put({ type: constant.RECEIVE_GET_SINGLE_USER, payload: response });

		// Execute if last argument is a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_GET_SINGLE_USER, payload:error });
	}
}

function* editUserWorker(action) {
	try {
		const response = yield call(editUser, ...action.payload);
		yield put({ type: constant.RECEIVE_EDIT_USER, payload: response });

		yield put({ type: authConstant.AUTH_UPDATE, payload: response });

		// Execute if last argument is a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_EDIT_USER, payload:error });
	}
}

export default function* watcherSaga() {
	yield takeLatest(constant.GET_ALL_USER, getAllUserWorker);
	yield takeLatest(constant.GET_SINGLE_USER, getSingleUserWorker);
	yield takeLatest(constant.EDIT_USER, editUserWorker);
}