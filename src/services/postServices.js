import instance from './instance';

const getPosts = () => instance('posts');

const addPost = (obj) => instance.post('posts', obj);

const update = (obj) => instance.put(`posts/${obj.id}`, obj);

export const postsServices = {
  getPosts,
  addPost,
  update,
};
