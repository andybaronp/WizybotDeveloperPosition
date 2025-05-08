export interface ProductResponse {
  id: string;
  displayTitle: string;
  embeddingText: string;
  url: string;
  shopifyProductId: string;
  imageUrl: string;
  productType: string;
  discount: boolean;
  variants: string;
}

export interface Product extends ProductResponse {
  price: string;
}
