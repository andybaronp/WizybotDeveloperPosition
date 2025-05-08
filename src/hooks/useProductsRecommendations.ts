import { useState, useEffect, useRef } from "react";
import apiProductsRecommendation from "../api/apiProdcutsRecommendation";
import { getRandomArray, getRandomPrice } from "../utils/getRadoms";
import type { Product } from "../interfaces/Prodcuts";

const useProductsRecommendations = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchData = async () => {
      const response = await apiProductsRecommendation();
      const productsRandom = getRandomArray(response, 3);
      const data = productsRandom.map((product) => ({
        ...product,
        price: getRandomPrice(),
      }));
      setProducts(data);
    };
    fetchData();
  }, []);

  return products;
};

export default useProductsRecommendations;
