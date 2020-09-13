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

const jsdomAlert = window.alert; 
window.alert = jest.fn();

describe('Testing FilterContainer Component', () => {
    const div = document.createElement('div');
    const component = mount(<Provider store={store}><FilterContainer /></Provider>,div);
    const instance = component.find('FilterContainer').instance();

    it('renders without crashing', () => {
        ReactDOM.render(<Provider store={store}><FilterContainer /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

    it('testing reset filter', () => {
        instance.resetFilter();
        expect(instance.launchFilter).toBe(null)
        expect(instance.landFilter).toBe(null)
        expect(instance.yearFilter).toBe(null)
    });

    it('testing yeasr filter', () => {
        const event = { target : { value : '2006', classList : { add : jest.fn()}}}
        instance.clickHandleYear(event);
        expect(instance.yearFilter).toBe('2006')
    });

    it('testing launch filter true', () => {
        const event = { target : { value : 'launch_success_true', classList : { add : jest.fn()}}}
        instance.yearFilter = '2006';
        instance.clickHandleLaunchFilter(event);
        expect(instance.launchFilter).toBe(true)
    });

    it('testing launch filter false', () => {
        const event = { target : { value : 'launch_success_false', classList : { add : jest.fn()}}}
        instance.yearFilter = null;
        instance.clickHandleLaunchFilter(event);
        expect(instance.launchFilter).toBe(null)
    });

    it('testing land filter true', () => {
        const event = { target : { value : 'land_success_true', classList : { add : jest.fn()}}}
        instance.yearFilter = '2006';
        instance.clickHandleLandFilter(event);
        expect(instance.landFilter).toBe(true);
    });

    it('testing land filter false', () => {
        const event = { target : { value : 'land_success_false', classList : { add : jest.fn()}}}
        instance.yearFilter = null;
        instance.clickHandleLandFilter(event);
        expect(instance.landFilter).toBe(null);
    });

    window.alert = jsdomAlert;

});