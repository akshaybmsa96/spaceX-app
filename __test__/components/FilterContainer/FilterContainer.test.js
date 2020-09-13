import React from 'react';
import ReactDOM from 'react-dom';
import FilterContainer  from '../../../src/components/FilterContainer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});


describe('Testing FilterContainer Component', () => {
    const div = document.createElement('div');
    mount(<Provider store={store}><FilterContainer /></Provider>,div);

    it('renders without crashing', () => {
        ReactDOM.render(<Provider store={store}><FilterContainer /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});