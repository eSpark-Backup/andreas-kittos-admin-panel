import { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../services/products';

const useProducts = (tabId) => {
  const { data: productsData, isLoading: isProductLoading, refetch } = useGetProductsQuery(tabId || "2439ae58-19d5-48c3-86fa-037fb031c422");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoryProduct = productsData?.data[0]?.categoryProduct || [];
    const category = productsData?.data[0]?.name || '';

    const updatedProducts = categoryProduct?.map((item) => ({
      ...item.product,
      category,
    }));

    setProducts(updatedProducts);
  }, [productsData]);

  // if currenttab change refetch will be called
  useEffect(() => {
    refetch();
  }, [tabId]);

  return {
    products,
    isProductLoading,

  };
};

export default useProducts;
