import {GET_USER,ADD_USER,UPDATE_USER,DELETE_USER,SET_USER,LOADER } from '../constants'
import { takeEvery, put } from 'redux-saga/effects'

function* getUser() {
    try {
        let data = yield fetch('http://192.168.1.203:3500/users',{
            headers: {'Content-Type':'application/json'},
            method:'GET'
        });
        data = yield data.json();
        yield put({type: SET_USER , data})
        yield put({type:LOADER,payload:false})

        
    } catch (error) {
        console.log("eroor",error); 
    }
    // console.warn("action is called", data)
    // yield put({type: SET_PRODUCT_LIST, data})
}
function* addUser(value) {
    const obj = value.payload
    yield put({type:LOADER,payload:true})

    try {
        let data = yield fetch('http://192.168.1.203:3500/users/',{
            body: JSON.stringify(obj),
            headers: {'Content-Type':'application/json'},
            method:'POST'
        });
        console.warn("action is called", data)
        data = yield data.json();
    } catch (error) {
        console.log("eroor",error); 
    }
    // yield put({type: SET_PRODUCT_LIST, data})
}
function* updateUser(item) {
    const myData = item.payload
    console.log("updateed",myData);
    yield put({type:LOADER,payload:true})

    try {
        let data = yield fetch(`http://192.168.1.203:3500/users/${myData.id}`,{
            body: JSON.stringify(myData),
            headers: {'Content-Type':'application/json'},
            method:'PATCH'
        });
        console.warn("action is called", data)
        data = yield data.json();

    } catch (error) {
        console.log("MY ERROR",error); 
    }
}
function* deleteUser(key) {
    console.log("keyyy",key);
    yield put({type:LOADER,payload:true})

    try {
        let data = yield fetch(`http://192.168.1.203:3500/users/${key.payload}`,{
            headers: {'Content-Type':'application/json'},
            method:'DELETE'
        });
        console.warn("action is called", data)
        data = yield data.json();
    } catch (error) {
        console.log("eroor",error); 
    }
}

function* userSaga() {
    yield takeEvery(GET_USER, getUser)
    yield takeEvery(ADD_USER, addUser)
    yield takeEvery(UPDATE_USER, updateUser)
    yield takeEvery(DELETE_USER, deleteUser)
}

export default userSaga