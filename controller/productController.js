const fetch = require("node-fetch");

const productController = {};
const urlProduct='https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763';

/**
 * 
 * @param {} req 
 * @param {status,body} res 
 */
productController.resumen=async(_,res)=>{

    const respuesta = await fetch(urlProduct,{
        method:'GET',
    })
    .then(response => response.json() )
    .then(result =>  result )
    .catch((err)=> {
        console.log('Error en la consulta'+ err)
        return {
            status:500,
            body:(err)
        }
    });
    if(respuesta.status===500){
        return res.status(500).json(respuesta);
    }

    res.status(200).json({
        status:200,
        body:{
            name:respuesta[0].name,
            sku:respuesta[0].partNumber,
            quantity:respuesta[0].quantity,
            shortDescription:respuesta[0].shortDescription,
            ripleyPuntos:respuesta[0].prices.ripleyPuntos,
            prices:{
                formatted:{
                    priceList: respuesta[0].prices.formattedListPrice,
                    priceOffer:respuesta[0].prices.formattedOfferPrice,
                    priceCard: respuesta[0].prices.formattedCardPrice,
                },
                priceList: respuesta[0].prices.listPrice,
                priceOffer:respuesta[0].prices.offerPrice,
                priceCard: respuesta[0].prices.cardPrice,
                discount:respuesta[0].prices.discount,
                discountPorcentage:respuesta[0].prices.discountPercentage
                

            },
            puntosRipley:respuesta[0].ripleyPuntos,
            garantia:{
                shortDescription:respuesta[0].warranties[0].shortDescription,
                prices:{
                    priceGarantia:respuesta[0].warranties[0].Price[0].formattedPriceValue
                }
            },
            shipping:{
                retiroTienda:respuesta[0].shipping.rTienda,
                envioDomicilio:respuesta[0].shipping.dDomicilio
            }

        }
    });
}

productController.imagenes= async(_,res)=>{

    const imagenes= await fetch(urlProduct,{
        method:'GET',
    }).then(resp=>resp.json()).then(result=>{
        return result[0].images
    });

    res.status(200).json({
        status:200,
        imagenes
    })

}



module.exports = productController;