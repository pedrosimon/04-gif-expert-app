import React from 'react';
import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';


describe('Pruebas en <AddCategory />', () => {

    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })


    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const inputValue = 'Hola Mundo';
        input.simulate('change',{target:{value:inputValue}});
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(inputValue);
    })

    test('no debería postear la info con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe llamar setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const inputValue = 'Hola Mundo';
        
        input.simulate('change',{target:{value:inputValue}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.prop('value')).toBe('');
    })
})
