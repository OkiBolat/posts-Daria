import { cn } from '@bem-react/classname';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsThunk } from '../../redux/actionsCreator';
import Post from '../Post/Post';
import './PostsList.scss';

const Posts = cn('posts');

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.filteredPosts);

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  return (
    <div className={Posts()}>
      {posts?.map((post) => (
        <Post
          date={post.date}
          key={post.id}
          name={post.name}
          image={post.avatar}
          text={post.createdAt}
        />
      ))}
    </div>
  );
};

export default PostsList;
