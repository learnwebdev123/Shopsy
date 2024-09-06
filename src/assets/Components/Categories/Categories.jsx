import React, { useEffect, useState } from "react";
import Feature from "../../Feature/Feature";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://fakestoreapi.com/products/categories`
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setCategories(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  return (
    <div>
      <Feature cards={categories} />
    </div>
  );
};

export default Categories;
