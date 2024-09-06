import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../assets/Components/Products/Products";
import axios from "axios";

function CategoryProducts() {
  const { name } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();
      console.log(data, "data");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://fakestoreapi.com/products/category/${name}`
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  if (products.length === 0) return <div>Loading...</div>;

  return <Products products={products} />;
}

export default CategoryProducts;
