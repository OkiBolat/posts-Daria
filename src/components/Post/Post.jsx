import React from 'react';
import { cn } from '../../helpers/reactBem';
import './Post.scss';

const post = cn('post');

const Post = ({ image = null, text = 'no text' }) => (
  <div className={post()}>
    {text}
    <img src={image} alt="" />
  </div>
);

export default Post;
