import {shallow} from 'enzyme';
import React from 'react';
import Error from '../components/error/Error';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Error component', () => {
    it('should render without throwing an error', () => {

        const wrapper = shallow(
            <Error title="Test error"/>
        ); 
        expect(wrapper).toMatchSnapshot();
    }); 
});