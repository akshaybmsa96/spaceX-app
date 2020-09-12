import { UPDATE_STORE_ACTION, INITIAL_DATA_ACTION, LOADER_ACTION } from "./reducerConstant";

export default function (state , action) {
    switch (action.type) {
        case UPDATE_STORE_ACTION : 
            return action.payload;

        case INITIAL_DATA_ACTION :
            return action.payload;

        case LOADER_ACTION : 
            return {...state, ...action.payload}

        default:
            return {...action.payload, ...state} ;
    }
}