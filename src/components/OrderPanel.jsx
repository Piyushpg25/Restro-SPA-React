export const OrderPanel = ({ cart, onUpdateQuantity, onRemoveCart, orderType, customerName, customerPhone }) => {

    const subtotal = cart?.reduce(
        (total, item) => total + item.price * item.qty, 0
    );

    const totalItems = cart?.reduce(
        (total, item) => total + item.qty, 0
    );

    const DISCOUNT_RATE = 10;
    const discountAmount = subtotal * (DISCOUNT_RATE / 100);

    const discountedSubtotal = subtotal - discountAmount;

    const TAX_RATE = 5;
    const TAX = discountedSubtotal * (TAX_RATE / 100);

    const grandTotal = discountedSubtotal + TAX;

    return (
        <div className="order-panel">

            <div className="order-header">
                <h2>Current Order</h2>
                <p>Order Type : {orderType}</p>

                <p>Customer: {customerName === "" ? "Not Provided" : customerName}</p>
                <p>Phone: {customerPhone === "" ? "Not Provided" : customerPhone}</p>
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

            <button className="charge-btn" disabled={cart?.length === 0}>
                Charge ₹{grandTotal?.toFixed(2)}
            </button>

        </div>
    );
};