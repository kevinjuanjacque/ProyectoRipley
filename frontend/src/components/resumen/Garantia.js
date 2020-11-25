

export const Garantia = ({garantia}) => {
    return (
        <div className="background-garantia description-font">
            
            <p id="desc">{garantia.shortDescription}</p>
            <div className="row">
                <div className="col">
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Elegir Garantia</label>
                    </div>
                </div>
                <div className="col">
                    <p id="price">{garantia.prices.priceGarantia}</p>
                </div>  
            </div>
        </div>
    )
}
