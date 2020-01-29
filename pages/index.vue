<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '@/components/PostList'

export default {
  components: {
    PostList
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  },
  mounted() {
  },
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
</style>
