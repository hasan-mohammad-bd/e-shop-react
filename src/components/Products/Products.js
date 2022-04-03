import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {img,price,name,seller} = product;
    console.log(product);
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2 className='text-xl font-bold py-2'>{name}</h2>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <button>Add to card</button>
        </div>
    );
};

export default Products;