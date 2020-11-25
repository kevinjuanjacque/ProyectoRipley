import {shallow} from 'enzyme'
import { ResumenProduct } from '../../components/resumenProduct'
describe('Prueba en componente <ResumenProduct />', () => {
    test('prueba renderizado correcto', () => {

        const wrapper=shallow(<ResumenProduct />);

        expect(wrapper).toMatchSnapshot();
        
    });
    
    
})
