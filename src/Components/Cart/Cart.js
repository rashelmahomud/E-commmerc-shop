import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let tex = 0;
    let grentTotal = 0;
    for(const product of cart){
       total = total + product.price;
       shipping = shipping + product.shipping;
       tex = total * 10/100;
       grentTotal = total + shipping + tex;
    }
    return (
        <div>
             <h2>order summmery</h2>
                <p>Order Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <h5>Tax: ${tex}</h5>
                <h3>Grand Total: ${grentTotal}</h3>
        </div>
    );
};

export default Cart;