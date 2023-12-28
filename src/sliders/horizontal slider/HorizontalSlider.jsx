import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const HorizontalSlider = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
      fetch("/products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <Carousel data={products}/>
        </div>
    );
};

export default HorizontalSlider;