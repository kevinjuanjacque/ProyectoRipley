import { useContext, useState } from 'react';
import fetchProduct from '../helpers/FetchProduct';
import { UseContext } from '../hooks/useContext';

export const Images = () => {
    
    const resultado=fetchProduct.FetchImagenesProduct();
    const img = resultado.resp;

    const {productos,setproductos} = useContext(UseContext)

    const [Photo, setPhoto] = useState(0)

    const NextPhoto = ()=>{
        if(Photo === img.length-1){
            setPhoto(0);
            return ;
        }
        setPhoto(Photo+1);
    }

    const addProduct=()=>{
        
        setproductos([...productos,'191919']);

    }

    return (
        <div>
            {( resultado.loading ) ? <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> :
                                    (<div height="500"><img className="img" src={`https:${img[Photo]}`} height="480" onClick={NextPhoto} alt="imagenesProduct" />
                                    <button className="btn btn-primary btn-block mt-3 ml-2" onClick={addProduct} > Agregar a la bolsa </button></div>)
                                    }
        </div>
    )
}
