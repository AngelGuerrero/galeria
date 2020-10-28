<template>
  <div class="slider__container">
    <ul v-if="images" class="slider__images">
      <li
        v-for="(image, index) in images"
        :key="image.id"
        class="slider__item"
        :class="[ index == 0 ? 'active': '']"
      >
        <img class="slider__image"  :src="image.href" :alt="image" />
      </li>
    </ul>
    <div v-else>
      <h3>Cargando...</h3>
    </div>

    <button @click="prev()">prev</button>
    <button @click="next()">next</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(
      //
      // La imagen seleccionada será la primera por defecto
      // Imagen seleccionada desde vuex
      [
        'selectedImage',
        'images'
      ]
    )
  },

  watch: {
    //
    // Escucha el cambio de la variable, elimina todas las clases
    // y asigna el nuevo valor al elemento seleccionado
    //
    selectedImage (newVal) {
      this.removeAllClasses()
      this.addClass(newVal)
    }
  },

  methods: {
    removeAllClasses () {
      const elements = document.getElementsByClassName('slider__item')

      elements.forEach(element => {
        element.classList.remove('active')
      })
    },

    //
    // Elimina la clase active
    //
    removeClasses () {
      const prev = this.selectedImage
      document.getElementsByClassName('slider__item')[prev].classList.remove('active')
    },

    //
    // Agrega la clase 'active' a un elemento seleccionado
    //
    addClass (current) {
      document.getElementsByClassName('slider__item')[current].classList.add('active')
      this.$store.commit('setSelectedImage', current)
    },

    prev () {
      if (this.selectedImage - 1 < 0) return

      this.removeClasses()
      const current = this.selectedImage - 1
      this.addClass(current)
    },

    next () {
      if (this.selectedImage + 1 >= this.images.length) return

      this.removeClasses()
      const current = this.selectedImage + 1
      this.addClass(current)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider__container {
  min-height: 500px;
  width: 100%;
  height: 100%;
}

.slider__images {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0;
  margin: 0;
}

.slider__item {
  list-style: none;
  opacity: 0;
}

.active {
  opacity: 1;
}

.slider__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  // Images are in stack
  position: absolute;
  top: 0;
  left: 0;
}
</style>
