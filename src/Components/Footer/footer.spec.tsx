import React from 'react';
import { Footer } from './Footer';
import { shallow } from 'enzyme';

// given
describe('Footer Component', () => {

    const {component} = render();

    // then
    it('should render Footer component', () => {
        expect(component).toBeTruthy();
    });

    // then
    it('should render three columns for info, contact and social icons', () => {
        expect(component.find('.footer__wrapper').children()).toHaveLength(3);
    });

    // then
    it('should render column for address info', () => {
        expect(component.find('.footer__wrapper').children().find('.footer__info')).toHaveLength(1);
    });

    // then
    it('should render column for contact info', () => {
        expect(component.find('.footer__wrapper').children().find('.footer__contact')).toHaveLength(1);
    });

    // when
    describe('Footer Component props has been passed', () => {

        const {component, props} = render();

        // then
        it('should have proper props of ceo info passed', () => {
            expect(component.find('.footer__ceo').text()).toEqual(props.ceo);
        });

        // then
        it('should have proper props of street and flat info passed', () => {
            expect(component.find('.footer__street').text()).toEqual(`${props.street} ${props.flat}`);
        });

        // then
        it('should have proper postal and city props passed', () => {
            expect(component.find('.footer__postal-and-city').text()).toEqual(`${props.postal} ${props.city}`);
        });

        // then
        it('should have proper phone number prop passed', () => {
            expect(component.find('.footer__phone').text()).toEqual(props.phone);
        });

        // then
        it('should have proper email address prop passed', () => {
            expect(component.find('.footer__email').text()).toEqual(props.email);
        });

        // then
        it('should have proper Font Awesome icons set', () => {
            // check every font awesome icon if it has proper class
        });
    });
});


function render() {

    let props = {
        name: "Jan Kowalski",
        ceo: "Stabsoft",
        street: "Kokosowa",
        flat: "2/12",
        postal: "54-067",
        city: "Wrocław",
        phone: "888999111",
        email: "jan.kowalski@stabsoft.pl"
    };

    let component = shallow(<Footer {...props} />);

    return {component, props};
}
