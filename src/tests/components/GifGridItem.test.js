import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en el GifGridItem', () => {
    const titulo = 'Un Titulo';
    const url = 'https://algo.com';
    const claseNombre = 'animate__bounce';
    
    let wrapper = shallow(<GifGridItem img={{title: titulo, url: url}} />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem img={{title: titulo, url: url}} />);
    })
    
    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un párrafo con el Titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
    })
    
    test('debe de tener la imagen con alt y el url', () => {
        const img = wrapper.find('img');
        const {alt, src} = img.props();
       
        expect(alt).toBe(titulo);
        expect(src).toBe(url)
    })

    test('Debe tener la clase animate__bounce', () => {
        const div = wrapper.find('div');
        const {className} = div.props();
        // const clases = div.props('className');
        const clase = className.split(' ')[2];

        expect(clase).toBe(claseNombre);
        expect(div.hasClass(claseNombre)).toBe(true);
        expect(className.includes(claseNombre)).toBe(true);
    })
})
