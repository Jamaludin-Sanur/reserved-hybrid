import NewsAction from "./NewsAction"
import NewsConstant from "./NewsConstant"
import NewsReducer from "./NewsReducer"
import NewsSaga from "./NewsSaga"

const bundle = {
    action: NewsAction,
    constant: NewsConstant,
    reducer: NewsReducer,
    saga: NewsSaga,
}

export default bundle;