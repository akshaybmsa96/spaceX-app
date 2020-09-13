import React from 'react';
import ReactDOM from 'react-dom';
import DataContainer  from '../../../src/components/DataContainer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockStoreData } from '../../mockStoreData'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({...mockStoreData,loader : true});



describe('Testing DataContainer Component', () => {
    const div = document.createElement('div');
    mount(<Provider store={store}><DataContainer /></Provider>,div);

    it('renders without crashing', () => {
        ReactDOM.render(<Provider store={store}><DataContainer /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

    it('renders with data', () => {
        const store = mockStore(mockStoreData);
        mount (<Provider store={store}><DataContainer /></Provider>,div); 
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });
    it('renders without data', () => {
        const store = mockStore({ data : []});
        mount (<Provider store={store}><DataContainer /></Provider>,div); 
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});