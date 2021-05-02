import constant from './AuthConstant'

export function login() {
	return {
		type: constant.LOGIN,
		payload: [...arguments],
	}
}

export function register() {
	return {
		type: constant.REGISTER,
		payload: [...arguments],
	}
}

export default {
	login,
	register,
}
