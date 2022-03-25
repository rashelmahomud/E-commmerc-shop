import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // order summery state
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const hundelClick = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
    }

    return (
        <div className='shop'>

            <div className='shops'>

                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        hundelClick = {hundelClick}

                    ></Product>)
                }
            </div>
            <div className='order'>

               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;