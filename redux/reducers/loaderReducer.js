import { LOADER } from '../constants'

export const loderData = (loader=true,action)=>{
    switch (action.type) {
        case LOADER:
    console.log("actionssss",action);
            return action.payload

    default:
        return loader
}
}