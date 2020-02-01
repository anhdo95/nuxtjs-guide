<template>
  <article v-if="post" class="single-post-page">
    <h1>{{ post.title }}</h1>
    <div class="post-details">
      <p>Last updated on: {{ post.updatedAt }}</p>
      <p>Written by {{ post.author }}</p>
    </div>
    <p>{{ post.content }}</p>
    <p>
      Let me know what you think about the post, send a mail to <a href="mailto:feedback@domain.com">feedback@domain.com</a>
    </p>
  </article>
</template>

<script>
export default {
  validate({ params, query }) {
    return /^.+$/.test(params.id)
  },
  async asyncData({ app, params, error: onError }) {
    try {
      return {
        post: await app.$api.getPost(params.id)
      }
    } catch (error) {
      onError(error)
    }
  }
}
</script>

<style scoped>
  .single-post-page {
    padding: 3rem;
  }
</style>
