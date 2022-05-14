import { cn } from '@bem-react/classname';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsThunk } from '../../redux/actionsCreator';
import Post from '../Post/Post';
import './PostsList.scss';

const Posts = cn('posts');

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  // console.log(posts);

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  return (
    <div className={Posts()}>
      {posts?.map((post) => (
        <Post key={post.id} image={post.avatar} text={post.postText} />
      ))}
    </div>
  );
};

export default PostsList;
