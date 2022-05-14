import instance from './instance'

const getPosts = () => {
  return instance("posts")
}

const addPost = (id) => {
  return instance("posts/" + Number(id))
}

const update = (obj) => {
  return instance.put(`posts/${obj.id}`, obj)
}



export const postsServices = {
  getPosts,
  addPost,
  update,
}