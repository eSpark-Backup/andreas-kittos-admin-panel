import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from '../services/categories';

function useCategory() {
  const [type, setType] = useState("Laundry");
  const { data, error, isLoading, refetch } = useGetCategoriesQuery();

  const filteredData = data?.length ? data.filter(item => item.name.includes(type)) : [];

  useEffect(() => {
    if(type && type?.length > 0){
      refetch()
    }
  },[type])

  return { data: filteredData, error, isLoading, type, setType };
}

export default useCategory;