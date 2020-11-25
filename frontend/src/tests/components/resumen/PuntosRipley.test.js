import {shallow} from 'enzyme';
import { PuntosRipley } from '../../../components/resumen/PuntosRipley';

describe('Pruebas en <PuntosRipley />', () => {


    test('Probando renderizacion en PuntosRipley.js ', () => {
        const pRipley = 5000

        const wraapper = shallow(<PuntosRipley ripleyPuntos={pRipley} />);

        expect( wraapper ).toMatchSnapshot();
    })
    
    test('Renderizar puntos que se envian por prop', () => {
        const pRipley = 5000

        const wraapper = shallow(<PuntosRipley ripleyPuntos={pRipley} />);

        const puntos = wraapper.find('strong').text();

        expect(puntos).toBe(pRipley.toString());
    })
    
})
