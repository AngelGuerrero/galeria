<template>
  <div class="dev px-3 md:px-16">
    <h1>Agregar nueva imagen</h1>

    <Notification />

    <form @submit.prevent="addNewImage">
      <!-- Imagen -->
      <div class="form__control my-5">
        <label for="input__href" class="font-bold">Enlace de la imagen</label>
        <input
          name="input__href"
          class="input"
          v-model="image.href"
          type="text"
          placeholder="Ingresa un enlace para una imagen"
          required
        />
      </div>

      <!-- Titulo -->
      <div class="form__control my-5">
        <label for="form__title" class="font-bold">
          Título para la imagen
        </label>
        <input
          name="input__title"
          class="input"
          v-model="image.title"
          placeholder="Ingresa un título para la imagen"
          type="text"
          required
        />
      </div>

      <!-- Descripción -->
      <div class="form__control my-5">
        <label for="input__description" class="font-bold"
          >Descripción de la imagen</label
        >
        <textarea
          class="input"
          name="input__description"
          v-model="image.description"
          type="text"
          placeholder="Ingresa una descripción para la imagen"
          required
        />
      </div>
      <input type="submit" class="btn" value="Agregar imagen" />
    </form>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import { db } from '@/data/FirebaseConfig'

export default {
  components: {
    Notification
  },

  data: () => ({
    image: {
      href: '',
      title: '',
      description: ''
    }
  }),

  methods: {
    addNewImage () {
      this.image.created = new Date()

      db.collection('images')
        .add(this.image)
        .then(response => {
          this.$store.commit('setMessage', {
            show: true,
            title: 'Nueva imagen agregada',
            message: this.image.description,
            error: false
          })

          this.clearData()
        })
        .catch(error => {
          this.$store.commit('setMessage', {
            show: true,
            title: 'Error al agregar la imagen',
            message: error.message,
            error: true
          })
        })
    },

    clearData () {
      this.image = {
        href: '',
        title: '',
        description: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid rgb(78, 22, 168);
  border-radius: 4px;
}

.btn {
  border: 1px solid transparent;
  padding: 8px;
  margin: 10px 0;
  background-color: $blue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: lighten($color: $blue, $amount: 20);
  }
  &:active {
    background-color: lighten($color: $blue, $amount: 50);
  }
}
</style>
