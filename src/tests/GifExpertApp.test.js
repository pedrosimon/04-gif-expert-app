import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

import '@testing-library/jest-dom';

describe('pruebas sobre <GifExpertApp />', () => {
    test('debería cargar el componente correctamente ', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    test('debe mostrar una lista de categorías', () => {
        const categories = ['one punch', 'DragonBall'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
})
