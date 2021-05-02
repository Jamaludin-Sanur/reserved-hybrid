import UserAction from "./UserAction"
import UserConstant from "./UserConstant"
import UserReducer from "./UserReducer"
import UserSaga from "./UserSaga"

const bundle = {
    action: UserAction,
    constant: UserConstant,
    reducer: UserReducer,
    saga: UserSaga,
}

export default bundle;