import React, { useEffect, useState } from 'react';
import Products from '../../components/products/Products';

const VarticalSlider = () => {
    const [products, setProducts] = useState();

    useEffect(() => { 
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
     },[])

    return (
        <div className=' max-w-7xl mx-auto p-10'>
            <Products/>
        </div>
    );
};

export default VarticalSlider;