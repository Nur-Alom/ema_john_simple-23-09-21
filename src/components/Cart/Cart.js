
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let price = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        price = price + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const Shipping = price > 0 ? 20 : 0;
    const tax = (price + Shipping) * 0.1;
    const total = price + Shipping + tax;

    return (
        <div>
            <h2>Order Summary: </h2>
            <h5>Item Ordered: {totalQuantity} </h5>
            <p>Price: {price.toFixed(2)}</p>
            <p>Shipping Cost: {Shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <br />
            <p>Price: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;