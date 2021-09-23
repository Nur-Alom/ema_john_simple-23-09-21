
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, price, seller, stock } = props.product;
    const cart = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p><small>by: {seller}</small></p>
                <h5>Price: {price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='purchase-btn'
                > {cart} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;