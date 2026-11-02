export const ProductCard = ({ product, onAddCart }) => {
    return (
        <div>
            <div className="product-card">
                <p>
                    {product.name} - {product.price}
                </p>
                <img src={product.image} alt={product.name} />

                <button onClick={() => onAddCart(product)}>
                    Add
                </button>
            </div>
        </div>
    )
}
