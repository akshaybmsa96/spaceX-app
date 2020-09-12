import { UPDATE_STORE_ACTION, INITIAL_DATA_ACTION } from "./reducerConstant";

export default function (state , action) {
    switch (action.type) {
        case UPDATE_STORE_ACTION : 
            return action.payload;

        case INITIAL_DATA_ACTION :
            return action.payload;

        default:
            return {...state} ;
    }
}