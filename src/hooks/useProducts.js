import { useState, useEffect } from 'react';
import { useGetProductsMutation } from '../services/products';

const useProducts = (tabId) => {
  const [fetch, { data: productsData, isLoading: isProductLoading }] = useGetProductsMutation();
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
    fetch(tabId || "2439ae58-19d5-48c3-86fa-037fb031c422");
}, [tabId]);

  return {
    products,
    isProductLoading,
    fetch,

  };
};

export default useProducts;
