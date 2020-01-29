<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="post.author">Author Name</AppControlInput>
    <AppControlInput v-model="post.title">Title</AppControlInput>
    <AppControlInput v-model="post.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput v-model="post.content" controlType="textarea">Content</AppControlInput>

    <AppButton type="submit">Save</AppButton>
    <AppButton btnStyle="cancel" @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  name: 'PostForm',
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      default: () => ({
        author: '',
        title: '',
        thumbnail: '',
        content: '',
      })
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    onSave() {
      this.$emit('submit', this.post)
    },

    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>
</style>
