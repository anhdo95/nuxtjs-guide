<template>
  <div class="admin-page">
    <section>
      <button class="create-post">Create Post</button>
    </section>
    <section>
      <PostList :posts="posts" />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  components: {
    PostList
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Post title 1",
          thumbnailUrl: "https://previews.123rf.com/images/maxkabakov/maxkabakov1401/maxkabakov140101464/25153116-news-concept-pixelated-words-tech-news-on-digital-background-3d-render.jpg",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 2,
          title: "Post title 2",
          thumbnailUrl: "https://previews.123rf.com/images/maxkabakov/maxkabakov1401/maxkabakov140101464/25153116-news-concept-pixelated-words-tech-news-on-digital-background-3d-render.jpg",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
      ]
    }
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
