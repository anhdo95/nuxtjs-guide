<template>
  <div class="edit-post-page">
    <PostForm :post="post" @submit="onSave" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EditPost',
  layout: 'admin',
  validate({ params, query }) {
    return /^.+$/.test(params.postId)
  },
  async asyncData({ app, params, error: onError }) {
    try {
      return {
        post: await app.$api.getPost(params.postId)
      }
    } catch (error) {
      onError(error)
    }
  },
  methods: {
    ...mapActions({
      updatePost: 'updatePost'
    }),
    async onSave(submittedPost) {
      try {
        await this.updatePost({ ...submittedPost, id: this.$route.params.postId })
        this.$router.push('/admin')
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>

<style scoped>
</style>
