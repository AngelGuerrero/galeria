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
        <MyCarouselImage
          :title="image.title"
          :description="image.description"
          :url="image.href"
        />
      </div>
    </div>

    <!-- Carousel que muestra la imagen seleccionada -->
    <div class="dev mycarousel__view">
      <MyCarouselSlider />
    </div>
  </div>
</template>

<script>
import MyCarouselSlider from './MyCarouselSlider'
import MyCarouselImage from './MyCarouselImage'

export default {
  components: {
    MyCarouselSlider,
    MyCarouselImage
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
    position: relative;
    // flex
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: pointer;
    }
  }
}

.mycarousel__view {
  flex-grow: 1;
}
</style>
