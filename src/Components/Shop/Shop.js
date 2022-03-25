import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div className='shop'>

            <div className='shops'>

                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}

                    ></Product>)
                }
          

            </div>
            <div className='order'>

                <h1>order summmery</h1>
            </div>
            
        </div>
    );
};

export default Shop;