import { cn } from '@bem-react/classname';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsThunk } from '../../redux/actionsCreator';
import Post from '../Post/Post';
import "./PostsList.scss"

const Posts = cn("posts")

const PostsList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(state => state.products.posts)
  console.log(posts)

  useEffect(() => {
    dispatch(getPostsThunk())
  },[dispatch])

  return (
    <div className={Posts()}>
      {posts?.map(post => (
        <Post key={post.id} text={post.postText}/>
      ))}
    </div>
  );
}

export default PostsList;