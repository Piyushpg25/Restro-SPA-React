export const ProductCard = ({ product }) => {
    return (
        <div>
            <div>
                <p>
                    {product.name} - {product.price}
                </p>
                <img src={product.image} alt={product.name} />

                <button>
                    Add
                </button>
            </div>
        </div>
    )
}
