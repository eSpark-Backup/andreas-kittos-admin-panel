import { useState, useEffect } from 'react';
import { useGetProductsMutation } from '../services/products';

const useProducts = (categoryId, page, productName) => {
  const [fetch, { data: productsData, isLoading: isProductLoading }] = useGetProductsMutation();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const category = productsData?.data?.items[0]?.name || "";
    const categoryProduct = productsData?.data?.items[0]?.categoryProduct

    const updatedProducts = categoryProduct?.map((item) => ({
      ...item.product,
      category,
    }));

    setProducts(updatedProducts);
  }, [productsData]);

  const handleFetch = () => {
    fetch({ categoryId, page, productName })
  }

  useEffect(() => {
    if (categoryId) {
      handleFetch()
    }
  }, [search, categoryId]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setSearch(productName)
    }, 1000)
    return () => clearTimeout(timer)
  }, [productName])

  return {
    products,
    isProductLoading,
    handleFetch,
  };
};

export default useProducts;
