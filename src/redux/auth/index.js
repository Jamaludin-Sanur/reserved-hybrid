import AuthAction from "./AuthAction"
import AuthConstant from "./AuthConstant"
import AuthReducer from "./AuthReducer"
import AuthSaga from "./AuthSaga"

const bundle = {
    action: AuthAction,
    constant: AuthConstant,
    reducer: AuthReducer,
    saga: AuthSaga,
}

export default bundle;