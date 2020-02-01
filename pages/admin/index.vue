<template>
  <div class="admin-page">
    <section>
      <button class="create-post" @click="$router.push('/admin/new-post')">
        Create Post
      </button>
    </section>
    <section>
      <PostList :posts="posts" :isAdmin="true" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'admin',
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  }
}
</script>

<style scoped>
  .admin-page {
    padding-top: 2rem;
    text-align: center;
  }

  .create-post {
    padding: 1rem 3rem;
    background-color: #f8e2a2;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
  }
</style>
