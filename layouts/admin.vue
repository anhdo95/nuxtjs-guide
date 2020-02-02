<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <main class="main"><nuxt /></main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheSidenav from '@/components/TheSidenav'

export default {
  components: {
    TheSidenav,
    TheHeader
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>
  .main {
    padding: 2rem;
  }
</style>
