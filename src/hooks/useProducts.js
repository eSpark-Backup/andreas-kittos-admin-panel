import { useState, useEffect } from 'react';
import { useGetProductsMutation } from '../services/products';

const useProducts = (productName) => {
  const [fetch, { data: productsData, isLoading: isProductLoading }] = useGetProductsMutation();
  const [products, setProducts] = useState([]);
  const [currentTab, setCurrentTab] = useState()
  const [search, setSearch] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const category = productsData?.data?.items[0]?.name || "";
    const categoryProduct = productsData?.data?.items[0]?.categoryProduct
    const totalItems = productsData?.data?.meta?.totalItems

    const updatedProducts = categoryProduct?.map((item) => ({
      ...item.product,
      category,
    }));
    
    setTotalItems(totalItems);
    setProducts(updatedProducts);
  }, [productsData]);

  const handleFetch = () => {
    fetch({ categoryId:currentTab, page, productName })
  }

  const handleTabChange = (id) => {
    console.log({id});
    setPage(1)
    setCurrentTab(id)
  }

  useEffect(() => {
    if (currentTab) {
      handleFetch()
    }
  }, [search, currentTab, page]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setPage(1)
      setSearch(productName)
    }, 1000)
    return () => clearTimeout(timer)
  }, [productName])

  return {
    handleTabChange,
    currentTab,
    products,
    totalItems,
    isProductLoading,
    handleFetch,
    setPage,
    page,
  };
};

export default useProducts;
