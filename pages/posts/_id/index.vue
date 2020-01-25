<template>
  <article class="single-post-page">
    <h1>Post title</h1>
    <div class="post-details">
      <p>Last updated on: 2019/02/11</p>
      <p>Written by NAME</p>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, soluta blanditiis doloremque accusamus alias, debitis, sed quisquam velit cupiditate expedita quae animi. Sint, deleniti. Molestias doloremque reiciendis quasi eveniet laudantium.
    </p>
    <p>
      Let me know what you think about the post, send a mail to <a href="mailto:feedback@domain.com">feedback@domain.com</a>
    </p>
  </article>
</template>

<script>
export default {
  validate({ params, query }) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>
  .single-post-page {
    padding: 3rem;
  }
</style>
