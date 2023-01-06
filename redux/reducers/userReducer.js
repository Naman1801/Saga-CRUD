import {GET_USER,ADD_USER,UPDATE_USER,DELETE_USER,SET_USER,LOADER } from '../constants'

export const userData = (data=[],action)=>{
    switch (action.type) {
        case SET_USER:
            // console.warn("User_LIST condition ", action)
            return [...action.data]

        // case LOADER : 
        //     return !loader


    default:
        return data
}
}