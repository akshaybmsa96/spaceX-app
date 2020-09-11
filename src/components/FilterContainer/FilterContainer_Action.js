
import axios from 'axios'
import { BASE_URL } from "../../config/endPoints"
import { UPDATE_STORE_ACTION, RESET_FILTER_ACTION } from "../../appStore/reducerConstant"

export const FilterData = (year=null,lauchSuccess=null,landSuccess=null) => (dispatch) => { 

    const YEAR_FILTER = (year!==null) ? `&launch_year=${year}` : '';
    const LAUNCH_FILTER = (lauchSuccess!==null) ? `&launch_success=${lauchSuccess}` : '';
    const LAND_FILTER = (landSuccess!==null ) ? `&land_success=${landSuccess}` : '';
    const FILTER_URL = YEAR_FILTER + LAUNCH_FILTER + LAND_FILTER;

    axios.get(BASE_URL + FILTER_URL).then(res=>{

        const data = res.data;

        dispatch({
            type : UPDATE_STORE_ACTION,
            payload: { data }
        })

    }).catch(err => {
        console.log('err',err)
        dispatch({
            type : '',
        })
    })

}