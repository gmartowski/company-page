import React from 'react';
import { shallow } from 'enzyme';
import { Anchor } from './Anchor';

// given
describe('Anchor Component', () => {

    const {component} = render();

    // then
    it('should anchor component be rendered', () => {
        expect(component.prop('className')).toEqual('anchor');
    });

    // when
    describe('props has been passed', () => {

        const {component, target, href} = render();

        // then
        it(`should have prop target equals ${target} `, () => {
            expect(component.prop('target')).toEqual(target);
        });

        // then
        it(`should have prop href equals ${href}`, () => {
            expect(component.prop('href')).toEqual(href);
        });
    });

});

function render() {
    const target = "_self";
    const href = "http://stabsoft.pl";
    const component = shallow(<Anchor href={href} target={target} />);
    return {component, target, href};
}
