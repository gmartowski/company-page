import React from 'react';
import { shallow } from 'enzyme';
import { Title } from './Title';

// given
describe('Title Component', () => {

    const {component, title, markup} = render();

    // then
    it('should render title with proper markup', () => {
        expect(component.find(markup)).toBeTruthy();
    });

    it('should render title ', () => {
        expect(component.childAt(0).text()).toEqual(title);
    });
});

function render() {

    const markup = 'h2';
    const title = 'random test title which is not too long';
    const component = shallow(<Title markup={markup} title={title} />);

    return {component, markup, title};
}
