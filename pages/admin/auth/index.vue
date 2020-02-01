<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="user.email">E-mail address</AppControlInput>
    <AppControlInput v-model="user.password" type="password">Password</AppControlInput>

    <AppButton @click="isLoggedIn = !isLoggedIn">{{ !isLoggedIn ? 'Sign up' : 'Login' }}</AppButton>
    <AppButton btnStyle="inverted" @click="onCancel">Switch to {{ isLoggedIn ? 'Sign up' : 'Login' }}</AppButton>
  </form>
</template>

<script>
export default {
  name: 'Auth',
  layout: 'admin',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoggedIn: false
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
