import React from 'react';
import { Image } from './Image';
import { shallow } from 'enzyme';

// given
describe('Image Component', () => {

    const {component, src, title, alt} = render();

    // then
    it('should render img markup', () => {
        expect(component.find('img').prop('className')).toEqual('image');
    });

    // then
    it('should render img with declared src', () => {
        expect(component.find('img').prop('src')).toEqual(src);
    });

    // then
    it('should render img with declared alt', () => {
        expect(component.find('img').prop('alt')).toEqual(alt);
    });

    // then
    it('should render img with declared title', () => {
        expect(component.find('img').prop('title')).toEqual(title);
    });
});

function render() {
    const src = 'https://stabsoft.pl';
    const alt = "Stabsoft";
    const title = "Stabsoft";
    const component = shallow(<Image src={src} alt={alt} title={title} />);
    return {component, src, alt, title};
}
