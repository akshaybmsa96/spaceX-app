import React from 'react';
import ReactDOM from 'react-dom';
import App  from '../src/App';
import { mount } from 'enzyme';

describe('Testing App Component', () => {
    const div = document.createElement('div');
    mount(<App />,div);

    it('renders without crashing', () => {
        ReactDOM.render(<App />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});