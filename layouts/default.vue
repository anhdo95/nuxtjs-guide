<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <nuxt />
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

<style>
</style>
