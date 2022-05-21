/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Bar from '../../components/Footer/Bar';
import PostsList from '../../components/PostsList/PostsList';
import { cn } from '../../helpers/reactBem';
import { getPosts, getPostsByFilter } from '../../redux/reducer';
import './Home.scss';

const HomeBem = cn('home');
const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const getAllPosts = () => {
    dispatch(dispatch(getPosts()));
    setSearchValue('');
  };

  const getFilterPost = (e) => {
    setSearchValue(e.target.value);
    dispatch(getPostsByFilter(e.target.value));
  };

  return (
    <div className={HomeBem()}>
      <div className={HomeBem('header')}>
        <p className={HomeBem('title')}>
          #MyPosts
        </p>
        <div className={HomeBem('searchPanel')}>
          <input onBlurCapture={getAllPosts} value={searchValue} onChange={getFilterPost} type="text" placeholder="search" />
        </div>
      </div>
      <PostsList />
      <Bar />
    </div>
  );
};

export default Home;
