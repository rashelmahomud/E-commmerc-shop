import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,price,img,ratings,seller} = props.product;

    return ( 
        <div className='product'>
        <img className='imgs' src={img} alt="" />
        <div className='product-info'>
        <h2>{name}</h2>
        <h3>price: ${price}</h3>
        <h5>Manufacturer :{seller}</h5>
        <p>Rating :{ratings}</p>
        </div>

        <button onClick={() => props.hundelClick(props.product)}  className='product-btn'>Add to Cart</button>
   
        </div>
    );
};

export default Product;