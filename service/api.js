export default ($axios, $store) => {
  $axios.onRequest(config => {
    if ($store.state.token) {
      const paramSign = config.url.includes('?') ? '&' : '?'
      const authParam = `${paramSign}auth=${$store.state.token}`

      config.url += authParam
    }
  })

  return {
    getPosts() {
      return $axios.$get(`/posts.json`)
        .then(data => {
          return Object.keys(data).map(key => ({
            ...data[key],
            id: key,
          }))
        })
    },
    getPost(id) {
      return $axios.$get(`${process.env.baseUrl}/posts/${id}.json`)
        .then(data => {
          if (!data) {
            throw new Error('The post is not found!')
          }

          return data
        })
        .catch(error => {
          throw new Error(error)
        })
    },
    createPost(post) {
      post.updatedAt = new Date()
      return $axios.$post(`${process.env.baseUrl}/posts.json`, post)
        .then(data => data.name)
    },
    updatePost(id, post) {
      post.updatedAt = new Date()
      return $axios.$put(`${process.env.baseUrl}/posts/${id}.json`, post)
    },
    signup(body) {
      body.returnSecureToken = true

      return $axios.$post(
        process.env.firebaseSignUpAPI,
        body
      )
    },
    login(body) {
      body.returnSecureToken = true

      return $axios.$post(
        process.env.firebaseSignInAPI,
        body
      )
    }
  }
}
