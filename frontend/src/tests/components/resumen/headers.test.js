

import {shallow} from 'enzyme'
import { Headers } from '../../../components/resumen/Headers'


describe('Pruebas a <Headers />', () => {
    test('Prueba de renderizado del Headers.js', () => {
        
        const prop={
            name:'nombre del producto',
            sku:'202002020',
            desc:'descripcion del producto'
        }

        const wrapper= shallow(<Headers name={prop.name} sku={prop.sku} shortDescription={prop.desc} />);

        expect(wrapper).toMatchSnapshot();
    });


    test('Prueba render de props ', () => {
        const prop={
            name:'nombre del producto',
            sku:'202002020',
            desc:'descripcion del producto'
        }

        const wrapper= shallow(<Headers name={prop.name} sku={prop.sku} shortDescription={prop.desc} />);

        const name=wrapper.find('h1').text();
        const sku=wrapper.find('small').text();
        const desc= wrapper.find('p').text();

        expect( name ).toBe(prop.name);
        expect( sku ).toBe('SKU: ' +prop.sku);
        expect( desc ).toBe(prop.desc);

    })
    
    
})
