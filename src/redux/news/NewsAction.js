import constant from './NewsConstant'

export function getAllNews() {
	return {
		type: constant.GET_ALL_NEWS,
		payload: [...arguments],
	}
}

export function getSingleNews() {
	return {
		type: constant.GET_SINGLE_NEWS,
		payload: [...arguments],
	}
}

export function createNews() {
	return {
		type: constant.CREATE_NEWS,
		payload: [...arguments],
	}
}

export function editNews() {
	return {
		type: constant.EDIT_NEWS,
		payload: [...arguments],
	}
}

export function deleteNews() {
	return {
		type: constant.DELETE_NEWS,
		payload: [...arguments],
	}
}

export default {
	getAllNews,
	getSingleNews,
	createNews,
	editNews,
	deleteNews,
}
