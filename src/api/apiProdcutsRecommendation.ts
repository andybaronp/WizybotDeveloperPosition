import type { ProductResponse } from "../interfaces/Prodcuts";
import { CONSTANTS } from "../utils/constans";

const apiProductsRecommendation = async (): Promise<ProductResponse[]> => {
  try {
    const response = await fetch(CONSTANTS.API_PRODUCTS);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default apiProductsRecommendation;
