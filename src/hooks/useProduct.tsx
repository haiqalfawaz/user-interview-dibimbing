import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.get(`${apiUrl}`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isLoading };
};

export default useProduct;
