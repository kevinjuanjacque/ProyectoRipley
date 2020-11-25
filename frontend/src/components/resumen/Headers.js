

export const Headers = ({name,sku,shortDescription}) => {
    return (
        <div>
            <h1 className="title">{name}</h1>
            <small className="sku-font">SKU: { sku }</small>
            <p className="description-font">{shortDescription}</p>
        </div>
    )
}
