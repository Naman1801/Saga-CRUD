import { combineReducers } from "redux";
import {userData} from './userReducer'
import {loderData} from '../reducers/loaderReducer'
export default combineReducers({
    user:userData,
    loader:loderData
    // loader:loaderData,
})
