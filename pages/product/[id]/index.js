import React from 'react';
import {useRouter} from 'next/router'


const productDetail = () => {

    const router = useRouter();
    const id= router.query.id;
  
    return (
        <div>
            <h1>Product Details  {id}  </h1>
        </div>
    );
};

export default productDetail;


