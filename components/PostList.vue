<template>
  <div class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :isAdmin="isAdmin"
    />
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    posts: Array,
    isAdmin: Boolean
  }
}
</script>

<style scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
}
</style>
