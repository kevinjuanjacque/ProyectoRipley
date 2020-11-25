import { Images } from "./components/Images"
import { ResumenProduct } from "./components/ResumenProduct"


export const Body = () => {
    
    return (
        <div className="row mt-5">
            <div className="col mb-5">
                <Images />
            </div>
            <div className="col">   
                <ResumenProduct />
            </div>
        </div>
    )
}
