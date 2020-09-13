import React from 'react';
import ReactDOM from 'react-dom';
import PageLoader  from '../../../src/components/PageLoader';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({loader : false});


describe('Testing PageLoader Component', () => {
    const div = document.createElement('div');
    mount(<Provider store={store}><PageLoader /></Provider>,div);

    it('renders without crashing', () => {
        ReactDOM.render(<Provider store={store}><PageLoader /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

    it('render Loader', () => {
        const store = mockStore({loader : true});
        mount(<Provider store={store}><PageLoader /></Provider>,div); 
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});