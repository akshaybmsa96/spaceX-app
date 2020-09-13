import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard  from '../../../src/components/InfoCard';
import { mount } from 'enzyme';


describe('Testing InfoCard Component', () => {
    const div = document.createElement('div');
    mount(<InfoCard />,div);

    it('renders without crashing', () => {
        ReactDOM.render(<InfoCard />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});