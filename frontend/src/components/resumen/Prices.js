import { useEffect, useState } from "react"

export const Prices = ({prices}) => {
    const [Offert, setOffert] = useState();
    const [BetsPrice, setBetsPrice] = useState({Normal:prices.priceList});
    
    useEffect(() => {
        if(parseInt(prices.discountPorcentage)>0){
            setOffert(true);
            let Descuento = [prices.priceCard,prices.priceOffert].sort((a,b)=>a-b)[0];
            if(Descuento === prices.priceCard){
                setBetsPrice({card:Descuento});
            }else{
                setBetsPrice({internet:Descuento});
            }
        
        }else{
            setOffert(false);
        }
        
    }, [prices.discountPorcentage,prices.priceCard,prices.priceOffert])
    

    return (
        <div>

            <div className={(Offert) ? "row price-font" : "row best-price-font"}>

                <div className="col">
                    <span id="precio">{(Offert) ? 'Normal' : 'Internet' }</span>
                </div>
                <div className="col">
                    <span> { (!Offert) ? prices.formatted.priceList : <strike>{prices.formatted.priceList} </strike>} </span>
                </div>

            </div>

            {
                (Offert) && <>
                    <div className= "row best-price-font">

                        <div className="col">
                            <span >{(BetsPrice.card) ? 'Tarjeta Ripley' : 'Internet'}</span>
                        </div>
                        <div className="col">
                            <span >{ (BetsPrice.card) ? prices.formatted.priceCard : prices.formatted.priceOffer }</span>
                        </div>

                    </div>
                    <div className="row price-font">
                        <div className="col">
                            Descuento
                        </div>
                        <div className="col">
                            <p className="discount-font-porcentage">

                                { prices.discountPorcentage}%
                            </p>
                        </div>

                    </div>
                </>
            }

        </div>
    )
}
