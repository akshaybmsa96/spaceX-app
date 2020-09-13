import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as filterAction from '../../../src/components/FilterContainer/FilterContainer_Action'
import { mockStoreData } from '../../mockStoreData';
import { UPDATE_STORE_ACTION } from '../../../src/appStore/reducerConstant';
import thunk from 'redux-thunk';
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);


describe('Testinf Filter Actions', () => {
    let store ;
    beforeEach(() => {
        store = mockStore(() => mockStoreData);
        jest.setTimeout(10000);
        moxios.install()
    });
    afterEach(() => moxios.uninstall());

    it('Test Filter action', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mockStoreData
            });
        }); 
        store.dispatch(filterAction.FilterData(2006,false,false)).then((res) => {
            const { type } = store.getActions()[1];
            expect(type).toBe(UPDATE_STORE_ACTION);
        })
        
    });
    it('Test ShowLoader action', () => {
        const spyconvertToListElement = jest.spyOn(filterAction, 'ShowLoader')
        store.dispatch(filterAction.ShowLoader(true));
        expect(spyconvertToListElement).toHaveBeenCalled()
        spyconvertToListElement.mockClear()
    });
});
