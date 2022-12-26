import React from 'react';
import {useRouter} from 'next/router'

const review = () => {

    const router = useRouter();
    const {id,review} = router.query;
  

    return (
        <div>
             <h1>review {review} for product {id}</h1>
        </div>
    );
};

export default review;