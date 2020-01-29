import axios from 'axios'

export default {
  getPosts() {
    return axios.get('https://nuxt-backend-ad7fc.firebaseio.com/posts.json')
      .then(res => {
        return Object.keys(res.data).map(key => ({
          ...res.data[key],
          id: key,
        }))
      })
  },
  getPost(id) {
    return axios.get(`https://nuxt-backend-ad7fc.firebaseio.com/posts/${id}.json`)
      .then(res => {
        if (!res.data) {
          throw new Error('The post is not found!')
        }

        return res.data
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  createPost(post) {
    post.updatedAt = new Date()
    return axios.post('https://nuxt-backend-ad7fc.firebaseio.com/posts.json', post)
      .then(res => res.data.name)
  },
  updatePost(id, post) {
    post.updatedAt = new Date()
    return axios.put(`https://nuxt-backend-ad7fc.firebaseio.com/posts/${id}.json`, post)
  }
}
