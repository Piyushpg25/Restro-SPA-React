export const OrderPanel = ({ cart, onUpdateQuantity, onRemoveCart, orderType, customerName, customerPhone, tableNumber, clearCart, onPlaceOrder,subtotal,totalItems,discountAmount,discountedSubtotal,TAX,grandTotal,DISCOUNT_RATE,TAX_RATE }) => {

    

    return (
        <div className="order-panel">

            <div className="order-header">
                <h2>Current Order</h2>
                <p>Order Type : {orderType}</p>

                <p>Customer: {customerName === "" ? "Not Provided" : customerName}</p>
                <p>Phone: {customerPhone === "" ? "Not Provided" : customerPhone}</p>
                {orderType === "Dine In" && (
                    <p>Table Number: {tableNumber || "Not Provided"}</p>
                )}
                <span>{totalItems} Items</span>
            </div>

            <div className="cart-info">

                {cart?.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your Cart is empty</p>
                        <span>Add products to start an order.</span>
                    </div>
                ) : (
                    cart?.map((product) => (
                        <div key={product.id} className="cart-item">

                            <div className="cart-item-details">
                                <h3>{product.name}</h3>
                                <p>₹{product.price} / item</p>
                            </div>

                            <div className="cart-item-bottom">

                                <div className="btns">
                                    <button
                                        onClick={() => onUpdateQuantity(product.id, 'decrease')}
                                    >
                                        -
                                    </button>

                                    <span>{product.qty}</span>

                                    <button
                                        onClick={() => onUpdateQuantity(product.id, 'increase')}
                                    >
                                        +
                                    </button>
                                </div>

                                <strong>
                                    ₹{product.price * product.qty}
                                </strong>

                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => onRemoveCart(product.id)}
                            >
                                Remove
                            </button>



                        </div>
                    ))
                )}

            </div>

            <div className="order-summary">

                <h3>Bill Summary</h3>

                <div className="summary-row">
                    <span>Total Products</span>
                    <span>{cart?.length}</span>
                </div>

                <div className="summary-row">
                    <span>Total Items</span>
                    <span>{totalItems}</span>
                </div>

                <hr />

                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{subtotal?.toFixed(2)}</span>
                </div>

                <div className="summary-row discount-row">
                    <span>Discount ({DISCOUNT_RATE}%)</span>
                    <span>- ₹{discountAmount?.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                    <span>Discounted Subtotal</span>
                    <span>₹{discountedSubtotal?.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                    <span>Tax ({TAX_RATE}%)</span>
                    <span>₹{TAX?.toFixed(2)}</span>
                </div>

                <hr />

                <div className="grand-total">
                    <span>Grand Total</span>
                    <h2>₹{grandTotal?.toFixed(2)}</h2>
                </div>

            </div>

            <button onClick={onPlaceOrder} className="charge-btn" disabled={cart?.length === 0}>
                Charge ₹{grandTotal?.toFixed(2)}
            </button>

            <button className="clear-cart" onClick={clearCart} disabled={cart?.length === 0}>
                Clear
            </button>

        </div>
    );
};