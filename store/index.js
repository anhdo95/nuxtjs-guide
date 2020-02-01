import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    ADD_POST(state, post) {
      state.posts.push(post)
    },
    UPDATE_POST(state, post) {
      const postIndex = state.posts.findIndex(p => p.id === post.id)

      state.posts[postIndex] = post
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.store.dispatch('fetchPosts')
    },
    async fetchPosts({ commit }) {
      const posts = await this.$api.getPosts()

      commit('SET_POSTS', posts)
    },
    async createPost({ commit }, post) {
      const postId = await this.$api.createPost(post)
      commit('ADD_POST', { ...post, id: postId })
    },
    async updatePost({ commit }, post) {
      await this.$api.updatePost(post.id, post)
      commit('UPDATE_POST', post)
    }
  }
})

export default () => store




