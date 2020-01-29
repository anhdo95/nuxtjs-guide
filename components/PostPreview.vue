<template>
  <nuxt-link :to="postLink" role="article" class="featured-post">
    <figure>
      <img class="thumbnail" :src="post.thumbnail" />
      <figcaption>
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </figcaption>
    </figure>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    post: {
      type: Object,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? `/admin/${this.post.id}` : `/posts/${this.post.id}`
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .featured-post {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
  }

  .featured-post figcaption {
    padding: .5rem;
    background-color: #fff;
  }

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
