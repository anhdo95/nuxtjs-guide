<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <h1></h1>
    <div class="post-details">
    </div>
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'

export default {
  components: {
    PostPreview
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

<style>
  .home-page {
    position: relative;
    text-align: center;
    color: #fff;
    background-image: url('~assets/images/intro.jpg');
    background-size: cover;
  }

  .home-page::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
  }

  .home-page > * {
    position: relative;
    z-index: 100;
  }

  .intro h1 {
    display: inline-block;
  }

  .featured-posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem;
  }
</style>
