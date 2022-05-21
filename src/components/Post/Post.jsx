import React from 'react';
import { cn } from '../../helpers/reactBem';
import './Post.scss';

const post = cn('post');

const Post = ({
  name, image = null, date, text = 'no text',
}) => {
  const newD = new Date(date);
  return (
    <div classsName={post()}>
      <div className={post('header')}>
        <div className={post('info')}>
          <img src={image} alt="icon" />
          <span className={post('name')}>{name}</span>
        </div>
      </div>
      <div className={post('main')}>
        <p className={post('text')}>{text}</p>
        <div className={post('thumbBlock')}>
          <img src="" alt="" />
        </div>
      </div>
      <span>{newD.getFullYear()}</span>
    </div>
  );
};

export default Post;
