<template>
  <div>
    <img class="myimage" :class="clazz" :src="url" :alt="description" />

    <div class="backdrop p-2">
      <h3 class="m-2 text-white font-bold">
        {{ title }}
      </h3>
      <p class="m-2 text-white">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //
    // Nombre de la imagen
    title: {
      type: String,
      required: true
    },
    //
    // Descripción de la imagen
    description: {
      type: String,
      required: true
    },
    //
    // URL de la imagen
    url: {
      type: String,
      required: true
    },
    //
    // Clase para definir a qué contenedor pertenece
    clazz: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.myimage {
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}

.myimage:hover + .backdrop {
  opacity: 1;
}

// Clase que se utiliza para mostrar las imágenes como visor
.slider__image {
  height: 100%;
  max-height: 500px;
  // Las imágenes están apiladas
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
}

.backdrop {
  opacity: 0;

  width: 100%;
  background: rgba(0, 0, 0, 0.541);
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 0;

  transition: all 1s;
  &:hover {
    opacity: 1;
  }
}
</style>
