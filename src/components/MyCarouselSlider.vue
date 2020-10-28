<template>
  <div class="slider__container p-2">
    <ul class="slider__images">
      <li
        v-for="(image, index) in images"
        :key="image.id"
        class="slider__item"
        :class="[ index == 0 ? 'active': '']"
      >
        <img class="slider__image"  :src="image.href" :alt="image" />
      </li>

    </ul>

    <div class="">
      <button class="btn btn--prev" @click="prev()"></button>
      <button class="btn btn--next" @click="next()"></button>
    </div>
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
  position: relative;
}

.slider__images {
  width: 100%;
  // height: 100%;
  height: 500px;
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
  max-height: 500px;
  object-fit: cover;
  // Las imágenes están apiladas
  position: absolute;
  top: 0;
  left: 0;
}

.btn {
  width: 60px;
  height: 60px;
  border: none;
  background-color: rgba(0, 0, 0, 0.527);
  color: white;
  padding: 1px;
  border-radius: 10px;
  outline: none;
  box-shadow: 2px 2px 15px rgba(62, 62, 66, 0.568);
  text-transform: uppercase;

  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  &::after {
    width: 100%;
    height: 100%;
    font-size: 3em;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: $light;
  }
}

.btn--prev {
  margin-left: 5px;
  &::after {
    content: '⬅'
  }
}
.btn--next {
  margin-right: 5px;
  &::after {
    content: '➡';
  }
}
</style>
