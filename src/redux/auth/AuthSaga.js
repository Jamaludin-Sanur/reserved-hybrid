import { takeLatest, call, put } from "redux-saga/effects";
import constant from './AuthConstant';
import { login, register } from "../../api/AuthAPI";

function* loginWorker(action) {
	try {
		const response = yield call(login, ...action.payload);
		yield put({ type: constant.RECEIVE_LOGIN, payload: response });

		// Execute last argument if it a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_LOGIN, payload:error });
	}
}

function* registerWorker(action) {
	try {
		const response = yield call(register, ...action.payload);
		yield put({ type: constant.RECEIVE_REGISTER, payload: response });

		// Execute if last argument is a callback function
		const lastPayload = action.payload[action.payload.length-1];
		if(typeof lastPayload === "function") lastPayload(response);
	} catch (error) {
		console.error(error)
		yield put({ type: constant.RECEIVE_REGISTER, payload:error });
	}
}

export default function* watcherSaga() {
	yield takeLatest(constant.LOGIN, loginWorker);
	yield takeLatest(constant.REGISTER, registerWorker);
}