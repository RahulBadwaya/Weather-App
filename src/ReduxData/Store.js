import { createStore , combineReducers} from "redux";
import ForecastReducer from "./reducers/ForecastReducer";
import WeatherReducer from "./reducers/WeatherReducer";
var store = createStore(combineReducers({
    weather : WeatherReducer,
    forecast : ForecastReducer
}))
export default store
