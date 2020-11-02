<template>
  <div class="px-3 md:px-16">
    <h1 class="font-bold text-4xl my-3">🐕‍🦺 Dogs & Cats 🐈</h1>
    <MyCarousel />
  </div>
</template>

<script>
import MyCarousel from '@/components/MyCarousel/MyCarousel'

export default {
  name: 'Home',

  components: {
    MyCarousel
  }
}
</script>
