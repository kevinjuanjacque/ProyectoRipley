
import fetchProduct from '../helpers/FetchProduct';
import { Envio } from './resumen/Envio';
import { Garantia } from './resumen/Garantia';
import { Headers } from './resumen/Headers';
import { Prices } from './resumen/Prices';
import { PuntosRipley } from './resumen/PuntosRipley';

export const ResumenProduct = () => {
    const resultado=fetchProduct.FetchResumenProduct();
    const {name,sku,shortDescription,prices,ripleyPuntos,shipping,garantia}=resultado.resp;
   
    return (
        <div>
            {(resultado.loading) ? (<div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>) :
                                    (
                                        <>
                                            <Headers name={name} sku={sku} shortDescription={shortDescription} />

                                            <Prices prices={prices}/>

                                            <PuntosRipley ripleyPuntos={ripleyPuntos} />

                                            
                                            <Envio shipping={shipping } />

                                            <Garantia garantia={garantia} />
                                        </>
                                    )
            }
        </div>
    )
}
