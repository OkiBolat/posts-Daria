import instance from './instance';

const getPosts = () => instance('posts');

const addPost = (id) => instance(`posts/${Number(id)}`);

const update = (obj) => instance.put(`posts/${obj.id}`, obj);

export const postsServices = {
  getPosts,
  addPost,
  update,
};
