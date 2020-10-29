<template>
  <Form>
    <Notification />

    <h1>Agregar nueva imagen</h1>

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

  </Form>
</template>

<script>
import Form from '@/components/Form'
import Notification from '@/components/Notification'
import { db } from '@/data/FirebaseConfig'

export default {
  components: {
    Notification,
    Form
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

<style lang="scss" scoped></style>
