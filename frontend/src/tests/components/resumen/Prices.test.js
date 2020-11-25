import {shallow} from 'enzyme';
import { Prices } from '../../../components/resumen/Prices';

describe('Pruebas del componente <Prices />', () => {
    test('Probando render con offert en props', () => {
        const porpPrice={
                formatted: {
                    priceList: "$699.990",
                    priceOffer: "$699.990",
                    priceCard: "$679.990"
                },
                priceList: 699990,
                priceOffer: 699990,
                priceCard: 679990,
                discount: 20000,
                discountPorcentage: 3
            };
        const wrapper =  shallow(<Prices prices={porpPrice} />, {disableLifecycleMethods:true});
        
        expect( wrapper ).toMatchSnapshot();
        

    });

    test('Probando render sin offert en props', () => {
        const porpPrice={
            formatted: {
                priceList: "$699.990",
                priceOffer: "$699.990",
                priceCard: "$699.990"
            },
            priceList: 699990,
            priceOffer: 699990,
            priceCard: 699990,
            discount: 0,
            discountPorcentage: 0
        };
        const wrapper =  shallow(<Prices prices={porpPrice} />)
        
        expect( wrapper ).toMatchSnapshot();
        
    });


    
    
    
    
})
