<template>
  <form @submit.prevent="onSubmit">
    <AppControlInput v-model.trim="user.email">E-mail address</AppControlInput>
    <AppControlInput v-model="user.password" type="password">Password</AppControlInput>

    <AppButton>{{ !isLogin ? 'Sign up' : 'Login' }}</AppButton>
    <AppButton
      type="button"
      btnStyle="inverted"
      @click="isLogin = !isLogin"
    >
      Switch to {{ isLogin ? 'Login': 'Sign up' }}
    </AppButton>
  </form>
</template>

<script>
export default {
  name: "Auth",
  layout: "admin",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      isLogin: true
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      try {
        if (this.isLogin) {
          return void this.$api.login(this.user)
        }

        this.$api.signup(this.user);
      } catch (error) {
        console.error(error);
      }
    },

    switchTo() {
      this.isLogin = !this.isLogin;
    }
  }
};
</script>

<style scoped>
</style>
