import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer  from '../../../src/components/MainContainer';
import { mount } from 'enzyme';


describe('Testing MainContainer Component', () => {
    const div = document.createElement('div');
    mount(<MainContainer />,div);

    it('renders without crashing', () => {
        ReactDOM.render(<MainContainer />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});