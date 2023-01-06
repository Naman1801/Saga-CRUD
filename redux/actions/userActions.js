import {GET_USER,ADD_USER,UPDATE_USER,DELETE_USER,SET_USER,LOADER } from '../constants'


export const setLoader  = (value) =>{
    return {
        type:LOADER,
        payload:value
    }
}
export const getUser  = (data) =>{
    return {
        type:GET_USER,
        payload:data
    }
}
export const setUser  = () =>{
    return {
        type:SET_USER,
    }
}

export const addUser  = (data) =>{
  return{
    type:ADD_USER,
    payload:data
  }
    
}

export const deleteUser  = (key) =>{
    return {
        type:DELETE_USER,
        payload:key
    }

}

export const updateUser  = (item) =>{
    return {
        type:UPDATE_USER,
        payload:item
    }

}

