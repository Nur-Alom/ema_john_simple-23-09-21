import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">Name: {name}</h4>
                <p className="">Price: {price}</p>
                <p className="">Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="purchase-btn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;