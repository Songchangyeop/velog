import React, { useState, useEffect, useCallback } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card/Card';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';
import MenuApi from 'Common/api';
import ListSkeleton from 'Components/ListSkeleton/ListSkeleton';

const ListPage = ({ history }) => {
  const [postData, setPostData] = useState(null);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();
  let page = 1;
  const [loading, setLoading] = useState(false);

  useGetListData(1, setPostData, setLoading);

  useEffect(() => {
    if (inView && !loading) {
      page += 1;
      MenuApi.getAllPosts(page).then((res) => {
        if (!res.data) {
          return;
        } else {
          setPostData(() => postData.concat(res.data.results));
        }
      });
    }
    setLoading(false);
  }, [inView, loading]);

  useEffect(() => {
    setLocation(history.location.pathname);
  }, []);

  return (
    <Wrapper>
      <Header location={location} />
      <Container>
        {loading ? (
          <ListSkeleton />
        ) : (
          <CardList>
            {postData &&
              postData.map((posts) => {
                return (
                  <div>
                    <Card posts={posts} key={posts.id} />
                    <div ref={ref}></div>
                  </div>
                );
              })}
          </CardList>
        )}
      </Container>
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Container, CardList } = style;
