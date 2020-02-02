<template>
  <div>

  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('logout')

    this.$router.push('/auth')
  }
}
</script>
