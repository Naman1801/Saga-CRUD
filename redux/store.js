import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import userSaga from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:rootReducer,
    middleware : ()=>[sagaMiddleware]
})

sagaMiddleware.run(userSaga);

export default store