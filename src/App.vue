<template>
  <div id="app" class="dev">
    <!-- Navbar -->
    <div class="dev navbar">
      <Navbar />
    </div>

    <!-- Main view -->
    <main class="dev main">
      <router-view />
    </main>

    <!-- Main footer -->
    <div class="dev footer">
      <MyFooter />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MyFooter from '@/components/MyFooter'

export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_main.scss';
</style>
