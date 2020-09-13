
import axios from 'axios'
import { BASE_URL } from "../../config/endPoints"
import { UPDATE_STORE_ACTION, LOADER_ACTION } from "../../appStore/reducerConstant";
import { browserHistory } from 'react-router';

/**
 * @description Action function with thunk middleware to fetch data from api with query params
 * @param {*} year year filter(2006-2020)
 * @param {*} lauchSuccess launch filter(true/false)
 * @param {*} landSuccess land filter(true/false)
 */

export const FilterData = (year=null,lauchSuccess=null,landSuccess=null) => (dispatch) => { 

    const YEAR_FILTER = (year!==null) ? `&launch_year=${year}` : '';
    const LAUNCH_FILTER = (lauchSuccess!==null) ? `&launch_success=${lauchSuccess}` : '';
    const LAND_FILTER = (landSuccess!==null ) ? `&land_success=${landSuccess}` : '';
    const FILTER_URL = YEAR_FILTER + LAUNCH_FILTER + LAND_FILTER;

    return axios.get(BASE_URL + FILTER_URL).then(res=>{

        const data = res.data;

        dispatch({
            type : UPDATE_STORE_ACTION,
            payload: { data, loader : false }
        })

        browserHistory.replace(`/${FILTER_URL}`)

    }).catch(err => {
        console.log('err',err)
        dispatch({
            type : '',
            payload: { data : [], loader : false }
        })
    })

}

/**
 * @description Action function with thunk middleware to show screen loader during api call data fetch
 * @param {*} value determine the state of loader(true/false)
 */
export const ShowLoader = (value) => (dispatch) =>{
    dispatch({
        type : LOADER_ACTION,
        payload: { loader : value }
    })
}