import {shallow} from 'enzyme';
import { Garantia } from '../../../components/resumen/Garantia';


describe('Prouebas en <Garantia />', () => {

    test('Renderizado de <Garantia /> correcto', () => {
        const garantia = {
            shortDescription : 'Descripcion garantia',
            prices:{priceGarantia:'$40.990'}
        }

        const wrapper= shallow( <Garantia garantia={garantia} />)

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar descipcion de garantia enviado por props', () => {
        const garantia = {
            shortDescription : 'Descripcion garantia',
            prices:{priceGarantia:'$40.990'}
        }

        const wrapper= shallow( <Garantia garantia={garantia} />)

        const desc = wrapper.find('#desc').text(); 
        expect( desc ).toBe(garantia.shortDescription);
        
    });

    test('Debe renderizar el precio de garantia enviado por props', () => {
        const garantia = {
            shortDescription : 'Descripcion garantia',
            prices:{priceGarantia:'$40.990'}
        }

        const wrapper= shallow( <Garantia garantia={garantia} />)

        const desc = wrapper.find('#price').text(); 
        expect( desc ).toBe(garantia.prices.priceGarantia);
    })
    
    
    
})
