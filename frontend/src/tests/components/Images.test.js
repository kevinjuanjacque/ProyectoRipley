import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import fetchimg from '../../helpers/FetchProduct';
import {Images} from '../../components/Images';
jest.mock('../../helpers/FetchProduct');

describe('Prueba Component <Images />', () => {
    

    test('prueba render component', () => {
        
        fetchimg.FetchImagenesProduct.mockReturnValue({
            loading:false,
            resp:{
                status: 200,
                imagenes: [
                    "//home.ripley.cl/store/Attachment/WOP/D191/2000379450763/2000379450763_2.jpg",
                    "//home.ripley.cl/store/Attachment/WOP/D191/2000379450763/2000379450763-1.jpg",
                    "//home.ripley.cl/store/Attachment/WOP/D191/2000379450763/2000379450763-2.jpg",
                    "//home.ripley.cl/store/Attachment/WOP/D191/2000379450763/2000379450763-3.jpg",
                    "//home.ripley.cl/store/Attachment/WOP/D191/2000379450763/2000379450763-4.jpg"
                ]
            }
        });

        const wrapper = shallow(<Images />);

        expect(wrapper).toMatchSnapshot();
    });
    
})
