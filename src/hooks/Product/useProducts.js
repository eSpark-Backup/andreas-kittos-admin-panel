import { useState, useEffect } from 'react';
import { useGetProductsMutation } from '../../services/products';

const useProducts = (productName, prices) => {
  const [fetch, { data: productsData, isLoading: isProductLoading }] = useGetProductsMutation();
  const [products, setProducts] = useState([]);
  const [currentTab, setCurrentTab] = useState();
  const [search, setSearch] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [mainCat, setMainCat] = useState("");
  const [debouncedPrices, setDebouncedPrices] = useState(prices);

  localStorage.setItem("catID", mainCat);

  useEffect(() => {
    const category = productsData?.data?.items[0]?.name || "";
    const categoryProduct = productsData?.data?.items[0]?.categoryProduct;
    const totalItems = productsData?.data?.meta?.totalItems;

    const updatedProducts = categoryProduct?.map((item) => ({
      ...item.product,
      category,
    }));

    setTotalItems(totalItems);
    setProducts(updatedProducts);
  }, [productsData]);

  const handleFetch = () => {
    fetch({
      categoryId: currentTab,
      page,
      productName,
      minPrice: debouncedPrices?.minPrice,
      maxPrice: debouncedPrices?.maxPrice,
    });
  };

  const handleTabChange = (id) => {
    setMainCat(id);
    setPage(1);
    setCurrentTab(id);
  };

  useEffect(() => {
    if (currentTab) {
      handleFetch();
    }
  }, [search, currentTab, page, debouncedPrices]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setPage(1);
      setSearch(productName);
    }, 1000);
    return () => clearTimeout(timer);
  }, [productName]);


  useEffect(() => {
    let priceTimer = setTimeout(() => {
      setPage(1);
      setDebouncedPrices(prices);
    }, 1000);
    return () => clearTimeout(priceTimer);
  }, [prices]);

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
