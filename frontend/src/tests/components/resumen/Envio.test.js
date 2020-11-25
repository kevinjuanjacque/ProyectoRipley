
import { Envio } from '../../../components/resumen/Envio';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en <Envio.js />', () => {
    
    test('Debe renderizar <Envio.js /> correctamente', () => {
        
        const shipping = {
            retiroTienda:true,
            envioDomicilio:true
        } 


        const wrapper = shallow( <Envio shipping={shipping} />)
        expect( wrapper ).toMatchSnapshot();

    });

    test('Prueba del parrafo envio a domicilio ', () => {
        
        const shipping = {
            retiroTienda:true,
            envioDomicilio:true
        } 


        const wrapper = shallow( <Envio shipping={shipping} />)

        const parrafoDomicilio = wrapper.find("#DomicilioText").text();

        expect( parrafoDomicilio ).toBe((shipping.envioDomicilio) ? 'Disponible' : 'No disponible');

    })
    test('Prueba del parrafo retiro en tienda ', () => {

        const shipping = {
            retiroTienda:true,
            envioDomicilio:true
        } 


        const wrapper = shallow( <Envio shipping={shipping} />)

        const parrafoDomicilio = wrapper.find("#TiendaText").text();

        expect( parrafoDomicilio ).toBe((shipping.retiroTienda) ? 'Disponible' : 'No disponible');

    })
    
    
})
