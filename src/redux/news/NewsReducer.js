
import constant from './NewsConstant'

// reducer with initial state
const defaultState = {
	loadingAllNews: false,
	resultAllNews: null,
	newsArray: [],

	loadingNews: false,
	resultNews: null,

	loadingCreateNews: false,
	resultCreateNews: null,

	loadingEditNews: false,
	resultEditNews: null,

	loadingDeleteNews: false,
	resultDeleteNews: null,


};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case constant.GET_ALL_NEWS:
			return { ...state, loadingAllNews: true, resultAllNews: null };
		case constant.RECEIVE_GET_ALL_NEWS:
			if (action.payload.status === "SUCCESS") {
				return { ...state, loadingAllNews: false, resultAllNews: action.payload, allNews: action.payload.data };
			} else {
				return { ...state, loadingAllNews: false, resultAllNews: action.payload };
			}
		case constant.GET_SINGLE_NEWS:
			return { ...state, loadingNews: true, resultNews: null };
		case constant.RECEIVE_GET_SINGLE_NEWS:
			if (action.payload.status === "SUCCESS") {
				return { ...state, loadingNews: false, resultNews: action.payload, news: action.payload.data.account };
			} else {
				return { ...state, loadingNews: false, resultNews: action.payload, news: null };
			}

		case constant.CREATE_NEWS:
			return { ...state, loadingCreateNews: true, resultCreateNews: null };
		case constant.RECEIVE_CREATE_NEWS:
			return { ...state, loadingCreateNews: false, resultCreateNews: action.payload };

		case constant.EDIT_NEWS:
			return { ...state, loadingEditNews: true, resultEditNews: null };
		case constant.RECEIVE_EDIT_NEWS:
			return { ...state, loadingEditNews: false, resultEditNews: action.payload };

		case constant.DELETE_NEWS:
			return { ...state, loadingDeleteNews: true, resultDeleteNews: null };
		case constant.RECEIVE_DELETE_NEWS:
			return { ...state, loadingDeleteNews: false, resultDeleteNews: action.payload };

		default:
			return state;
	}
}