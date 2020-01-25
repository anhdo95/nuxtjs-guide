<template>
  <div>
    <PostList :posts="posts" />
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
