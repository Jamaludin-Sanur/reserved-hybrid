import constant from './AuthConstant'

const defaultState = {
	loadingLogin: false,
	resultLogin: {},

	loadingRegister: false,
	resultRegister: null,

	tokenAPI: undefined,
	user: undefined,
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case constant.LOGIN:
			return { ...state, loadingLogin: true, resultLogin: null };
		case constant.RECEIVE_LOGIN:
			if (action.payload.status === "SUCCESS") {
				return { ...state, loadingLogin: false, resultLogin: action.payload, tokenAPI: action.payload.data.token, user: action.payload.data.user };
			} else {
				return { ...state, loadingLogin: false, resultLogin: action.payload };
			}

		case constant.REGISTER:
			return { ...state, loadingRegister: true, resultRegister: null };
		case constant.RECEIVE_REGISTER:
			console.log("payy", action.payload)
			if (action.payload.status === "SUCCESS") {
				return { ...state, loadingRegister: false, resultRegister: action.payload, tokenAPI: action.payload.data.token, user: action.payload.data.user };
			} else {
				return { ...state, loadingRegister: false, resultRegister: action.payload };
			}

		case constant.AUTH_UPDATE:
			if (action.payload.status === "SUCCESS") {
				return { ...state, user: action.payload.data };
			}

		default:
			return state;
	}
}