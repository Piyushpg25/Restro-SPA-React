

export const OrderPanel = ({ cart, onUpdateQuantity, onRemoveCart }) => {

    return (
        <div>
            <div>
                <h1>Current Order</h1>

                <div className="cart-info">
                    {cart?.length === 0 ? (
                        <p>Your Cart is empty</p>
                    ) : (
                        cart?.map((product) => (
                            <div key={product.id}>
                                <h3>{product.name}</h3>
                                <p>Price: ₹{product.price}</p>
                                <p>Quantity: {product.qty}</p>

                                <div className="btns">
                                    <button onClick={() => onUpdateQuantity(product.id, 'decrease')}>
                                        -
                                    </button>
                                    <p>{product.qty}</p>
                                    <button onClick={() => onUpdateQuantity(product.id, 'increase')}>
                                        +
                                    </button>

                                    <button className="remove" onClick={() => onRemoveCart(product.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <p>Total Products : {cart?.length}</p>

            </div>
        </div>
    )
}
