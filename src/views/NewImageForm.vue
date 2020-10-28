<template>
  <div class="dev form__wrapper">
    <h3>Agregar nueva imagen</h3>
    <input class="input" v-model="image" type="text" />
    <button class="btn" @click="addNewImage">Agregar</button>
  </div>
</template>

<script>
import { db } from '@/data/FirebaseConfig'

export default {
  data: () => ({
    image: ''
  }),

  methods: {
    addNewImage () {
      db.collection('images')
        .add({
          href: this.image
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
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

.form__wrapper {
  width: 80%;
  max-width: 800px;
  margin: auto;
  padding: 10px;
}
.btn {
  border: 1px solid transparent;
  padding: 8px;
  margin: 10px 0;
  background-color: rgb(17, 28, 173);
  color: white;
  border-radius: 5px;
}
</style>
