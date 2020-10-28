<template>
  <div class="slider__container">
    <ul class="slider__images">
      <li
        v-for="image in images"
        :key="image"
        class="slider__item"
      >
        <img class="slider__image" :src="image" :alt="image" />
      </li>
    </ul>

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

  mounted () {
    //
    // Se muestra el primer elemento por defecto
    //
    document.getElementsByClassName('slider__item')[this.selectedImage].classList.add('active')
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
      // this.selectedImage = current
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
  border: 1px solid blue;
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
