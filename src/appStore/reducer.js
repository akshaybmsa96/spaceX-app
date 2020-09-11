import { UPDATE_STORE_ACTION, RESET_FILTER_ACTION, INITIAL_DATA_ACTION, INITIAL_DATA } from "./reducerConstant";

export default function (state , action) {
    switch (action.type) {
        case UPDATE_STORE_ACTION : 
            return action.payload;

        case RESET_FILTER_ACTION :
            return INITIAL_DATA;

        case INITIAL_DATA_ACTION :
            INITIAL_DATA.data = action.payload.data;
            return action.payload;

        default:
            return {...state} ;
    }
}