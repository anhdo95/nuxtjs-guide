<template>
  <div class="new-post-page">
    <PostForm @submit="onSave" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewPost',
  layout: 'admin',
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({
      createPost: 'createPost'
    }),
    async onSave(submittedPost) {
      try {
        await this.createPost(submittedPost)
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
