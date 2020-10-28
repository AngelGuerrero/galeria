import Vue from 'vue'
import Vuex from 'vuex'

import { db } from '@/data/FirebaseConfig'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
    // Imágenes traídas desde Firebase
    images: [],
    //
    // Imagen seleccionada por el usuario
    selectedImage: 0,
    //
    // Mensaje de alerta
    ui: {
      show: false,
      title: '',
      message: '',
      error: false
    }
  },

  mutations: {
    //
    // IMPORTANTE!!! 🤦‍♂️
    //
    ...vuexfireMutations,

    setSelectedImage (state, value) {
      state.selectedImage = value
    },

    setMessage (state, payload) {
      state.ui = payload
    }
  },

  actions: {
    bindImages: firestoreAction(({ bindFirestoreRef }) => {
      //
      // Obtiene las imágenes de forma más actual por fecha de creación
      return bindFirestoreRef('images', db.collection('images').orderBy('created', 'desc'))
    })
  },

  modules: {
  }
})
