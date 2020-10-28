import Vue from 'vue'
import Vuex from 'vuex'

import { db } from '@/data/FirebaseConfig'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],

    selectedImage: 0
  },

  mutations: {
    ...vuexfireMutations,

    setSelectedImage (state, value) {
      state.selectedImage = value
    }
  },

  actions: {
    bindImages: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('images', db.collection('images'))
    })
  },

  modules: {
  }
})
