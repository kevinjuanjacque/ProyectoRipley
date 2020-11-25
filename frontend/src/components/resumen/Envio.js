import { AiFillHome } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
export const Envio = ({shipping}) => {

    const { retiroTienda,envioDomicilio } = shipping;
    return (
        <>
        <div className="row box-envio">
            <div className="col">
                <AiFillHome className="mt-2" size="50" color={(envioDomicilio) ? "green" : "red"} />
            </div>
            <div className=" col-10 price-font" >
                Despacho a domicilio
                <p id="DomicilioText" className={(envioDomicilio) ? "envio-font" :  "envio-font-false "}>{(envioDomicilio) ? 'Disponible' : 'No disponible'}</p>
            </div>
            
        </div>
        <div className="row box-envio">
            <div className="col">
                <FaStore className="mt-2" size="50" color={(retiroTienda) ? "green" : "red"} />
            </div>
            <div className=" col-10 price-font" >
                Retiro en tienda
                <p id="TiendaText" className={(retiroTienda) ? "envio-font" :  "envio-font-false "}>{(retiroTienda) ? 'Disponible' : 'No disponible'}</p>
            </div>
            
        </div>
        </>
    )
}
