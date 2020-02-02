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
import { mapState, mapActions } from 'vuex'

export default {
  name: "Auth",
  layout: "auth",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      isLogin: true
    };
  },
  computed: {
    token: state => state.token
  },
  methods: {
    ...mapActions({
      signup: 'signup',
      login: 'login',
    }),
    async onSubmit() {
      try {
        const api = this.isLogin ? this.login : this.signup;

        await api(this.user)

        this.$router.push('/admin')

      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<style scoped>
</style>
