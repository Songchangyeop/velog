import { useEffect, useState, useCallback } from 'react';
import MenuApi from 'Common/api';

const useGetListData = (page, setPostData, setLoading) => {
  const [isLoading, setIsLoading] = useState(false);
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await MenuApi.getAllPosts(page);
      setPostData(response.data.results);
      setLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
};

export default useGetListData;
