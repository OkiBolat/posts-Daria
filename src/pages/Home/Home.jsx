import React from 'react';
import Bar from '../../components/Footer/Bar';
import PostsList from '../../components/PostsList/PostsList';
import { cn } from '../../helpers/reactBem';
import './Home.scss';

const HomeBem = cn('home');

const Home = () => (
  <div className={HomeBem()}>
    <div className={HomeBem('header')}>
      <p className={HomeBem('title')}>
        #MyPosts
      </p>
      <div className={HomeBem('searchPanel')}>
        <input type="text" placeholder="search" />
      </div>
    </div>
    <PostsList />
    <Bar />
  </div>
);

export default Home;
