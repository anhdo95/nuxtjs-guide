<template>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  },
  head: {
    title: 'The latest posts',
    meta: [
      { hid: "description", name: "description", content: "Trending, tech news on the world!" }
    ]
  }
}
</script>
