import React from "react";
import { data } from "../src/data";
import Navbar from "../src/layout/Navbar";
import ProductCard from "../src/ProductsCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {data?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Home;
