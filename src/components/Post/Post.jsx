import React from "react";
import { cn } from "../../helpers/reactBem";
import "./Post.scss";

const post = cn('post');

const Post = ({text = "no text"}) => {
  return (
    <div className={post()}>
      {text}
      </div>
  )
}

export default Post;