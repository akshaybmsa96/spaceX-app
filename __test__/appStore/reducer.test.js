import reducer from '../../src/appStore/reducer';
import { UPDATE_STORE_ACTION, INITIAL_DATA_ACTION, LOADER_ACTION } from '../../src/appStore/reducerConstant';
import { mockStoreData, loadMoreData } from '../mockStoreData';


describe('Testing reducer cases --', () => {

    it('default test', () => {
        expect(reducer(mockStoreData, {})).toEqual(mockStoreData);
    });
    it('test update store action', () => {
        expect(reducer(mockStoreData, {
            type: UPDATE_STORE_ACTION,
            payload: { ...loadMoreData }
        })).toEqual({
            data : loadMoreData.data,
        })
    })
    it('test initial data action', () => {
        expect(reducer(mockStoreData, {
            type: INITIAL_DATA_ACTION,
            payload: {...mockStoreData}
        })).toEqual({
            data : mockStoreData.data,
        })
    })
    it('test loader action', () => {
        expect(reducer({loader : false}, {
            type: LOADER_ACTION,
            payload: { loader:true }
        })).toEqual({
            loader : true
        })
    })
});