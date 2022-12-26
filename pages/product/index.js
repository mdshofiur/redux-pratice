import React from 'react';
import Link from 'next/link'

const product = ({id=100}) => {
    return (
        <div>
            <h1>product</h1>
            <Link href="/">
             <a>home</a>
            </Link>
            <Link href="/product/1">
             <a>Product 1</a>
            </Link>
            <Link href="/product/2">
             <a>Product 2</a>
            </Link>
            <Link href="/product/3" replace>
             <a>Product 3</a>
            </Link>
            <Link href={`/product/${id}`}>
             <a>Product {id}</a>
            </Link>
        </div>
    );
};

export default product;