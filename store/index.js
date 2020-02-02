import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
import { getCookie } from '@/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
    token: null,
    tokenTimeoutId: null
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_TOKEN_TIMEOUT_ID(state, timeoutId) {
      state.tokenTimeoutId = timeoutId
    },
    CLEAR_TOKEN(state) {
      state.token = null
    },
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
      context.store.dispatch('checkAuthentication', context.req.headers.cookie)

      return context.store.dispatch('fetchPosts')
    },
    async signup({ dispatch }, user) {
      const data = await this.$api.signup(user)
      dispatch('handleAuthentication', data)
    },
    async login({ dispatch }, user) {
      const data = await this.$api.login(user)
      dispatch('handleAuthentication', data)
    },
    async logout({ commit, state }) {
      commit('CLEAR_TOKEN')
      Cookie.remove('token')
      Cookie.remove('expirationDate')

      commit('SET_TOKEN_TIMEOUT_ID', null)
      clearTimeout(state.tokenTimeoutId)
    },
    handleAuthentication({ dispatch }, data) {
      const expirationDate = Date.now() + (Number(data.expiresIn) * 1000)

      Cookie.set('token', data.idToken, { expires: new Date(expirationDate) })
      Cookie.set('expirationDate', expirationDate, { expires: new Date(expirationDate) })

      dispatch('checkAuthentication')
    },
    checkAuthentication({ commit }, serverCookie) {
      const cookieMethod = serverCookie
        ? getCookie.bind(null, serverCookie)
        : Cookie.get

      const jwt = {
        token: cookieMethod('token'),
        expirationDate: cookieMethod('expirationDate'),
      }

      if (!jwt.token) return

      const tokenTimeoutId = setTimeout(() => {
        commit('CLEAR_TOKEN')
      }, jwt.expirationDate - Date.now())

      commit('SET_TOKEN', jwt.token)
      commit('SET_TOKEN_TIMEOUT_ID', tokenTimeoutId)
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




