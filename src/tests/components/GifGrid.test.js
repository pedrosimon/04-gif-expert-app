import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el <GifGrid />', () => {
    const category = 'One Punch';
    
    test('El componente <GifGrid /> debe cargarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        })
        
        
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('debería mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com/algo',
            title: 'un título'
        },
        {
            id: 'ABC2',
            url: 'https://google.com/algomas',
            title: 'otro título'
        }
    ]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
