import constant from './UserConstant'

export function getAllUser() {
	return {
		type: constant.GET_ALL_USER,
		payload: [...arguments],
	}
}

export function getSingleUser() {
	return {
		type: constant.GET_SINGLE_USER,
		payload: [...arguments],
	}
}

export function editUser() {
	return {
		type: constant.EDIT_USER,
		payload: [...arguments],
	}
}

export default {
	getAllUser,
	getSingleUser,
	editUser,
}
