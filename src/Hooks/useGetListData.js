import { useState, useEffect, useCallback } from 'react';
import MenuApi from 'Common/api';
import { useInView } from 'react-intersection-observer';

const useGetListData = (page, setPostData) => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await MenuApi.getAllPosts(page);
      setPostData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return isLoading;
};

export default useGetListData;
