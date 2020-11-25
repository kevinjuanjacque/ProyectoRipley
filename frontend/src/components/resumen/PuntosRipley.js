
export const PuntosRipley = ({ripleyPuntos}) => {
    return (
        <div className="row description-font background-puntos">

            <div className="col ">
                Con tarjeta Ripley acumulas
            </div>
            <div className="col">
                <strong>{ripleyPuntos}</strong> puntos
            </div>
            
        </div>
    )
}
