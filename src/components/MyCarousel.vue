<template>
  <div class="dev mycarousel">
    <!-- Lista de imágenes lateral -->
    <div class="dev mycarousel__images p-2 mr-2 hidden lg:block">
      <div
        v-for="(image, index) in this.$store.state.images"
        :key="image.id"
        class="dev image__container"
        @click="selectImage(index)"
      >
        <img class="mycarousel__image" :src="image.href" :alt="image" />
      </div>
    </div>

    <div class="dev mycarousel__view">
      <MyCarouselSlider />
    </div>
  </div>
</template>

<script>
import MyCarouselSlider from './MyCarouselSlider'

export default {
  components: {
    MyCarouselSlider
  },

  created () {
    this.$store.dispatch('bindImages')
  },

  methods: {
    selectImage (index) {
      this.$store.commit('setSelectedImage', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.mycarousel {
  height: 70vh;
  max-height: 500px;
  margin-bottom: 30px;

  display: flex;
  overflow: auto;
  background-color: white;
}

.mycarousel__images {
  width: 350px;
  overflow: auto;

  .image__container {
    width: 100%;
    margin-bottom: 10px;
    // flex
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: pointer;
    }
  }
}

.mycarousel__image {
  width: 100%;
  object-fit: cover;
}

.mycarousel__view {
  flex-grow: 1;
}
</style>
