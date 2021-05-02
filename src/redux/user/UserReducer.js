
import constant from './UserConstant'

// reducer with initial state
const defaultState = {
	loadingAllUser: false,
	resultAllUser: null,
	userArray: [],
	userPagination: {},

	loadingUser: false,
	resultUser: null,

	loadingEditUser: false,
	resultEditUser: null,


};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case constant.GET_ALL_USER:
			return { ...state, loadingAllUser: true, resultAllUser: null };
		case constant.RECEIVE_GET_ALL_USER:
			if (action.payload.status === "SUCCESS") {
				return { ...state, loadingAllUser: false, resultAllUser: action.payload, allUser: action.payload.data, };
			} else {
				return { ...state, loadingAllUser: false, resultAllUser: action.payload };
			}
		case constant.GET_SINGLE_USER:
			return { ...state, loadingUser: true, resultUser: null };
		case constant.RECEIVE_GET_SINGLE_USER:
			if (action.payload.status === "SUCCESS") {
				return { ...state, loadingUser: false, resultUser: action.payload, user: action.payload.data.account };
			} else {
				return { ...state, loadingUser: false, resultUser: action.payload, user: null };
			}

		case constant.EDIT_USER:
			return { ...state, loadingEditUser: true, resultEditUser: null };
		case constant.RECEIVE_EDIT_USER:
			return { ...state, loadingEditUser: false, resultEditUser: action.payload };

		default:
			return state;
	}
}