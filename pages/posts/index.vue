<template>
  <div>
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
}
</script>
