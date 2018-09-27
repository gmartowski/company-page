import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// given
describe('App component', () => {
    const { component } = render();

    // then
    it('it should render App component', () => {
        expect(component).toExist();
    });

});

function render() {
    const component = shallow(<App />);
    return {
        component
    }
}
