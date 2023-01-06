import {GET_USER,ADD_USER,UPDATE_USER,DELETE_USER,SET_USER } from '../constantss'
import { takeEvery, put } from 'redux-saga/effects'
import { getUser,addUser,updateUser,deleteUser } from './userSaga'
function* indexSaga() {
    yield takeEvery(GET_USER, getUser)
    yield takeEvery(ADD_USER, addUser)
    yield takeEvery(UPDATE_USER, updateUser)
    yield takeEvery(DELETE_USER, deleteUser)
}

export default indexSaga