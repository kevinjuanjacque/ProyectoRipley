import { useEffect, useState } from "react"

const FetchResumenProduct = () => {
    const [FetchResumen, setFetchResumen] = useState({
        loading:true,
        resp:''
    });

    useEffect(() => {
        fetch('https://proyectoripleypractica.herokuapp.com/product/resumen',{
            method:'GET'
        }).then(res=>res.json()).then(result=>{
            setFetchResumen({loading:false,resp:result.body});
        }).catch((err)=>console.log(err));
    }, [])

    return FetchResumen;
}
const FetchImagenesProduct = () => {
    const [FetchImg, setFetchImg] = useState({
        loading:true,
        resp:''
    });

    useEffect(() => {
        fetch('https://proyectoripleypractica.herokuapp.com/product/images',{
            method:'GET'
        }).then(res=>res.json()).then(result=>{
            setFetchImg({loading:false,resp:result.imagenes});
        }).catch((err)=>console.log(err));
    }, [])

    return FetchImg;
}
const fetchs ={
    FetchResumenProduct,
    FetchImagenesProduct
};
export default fetchs;