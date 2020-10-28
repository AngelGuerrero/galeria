import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [
      require('../assets/images/1.jpg'),
      require('../assets/images/2.jpg'),
      require('../assets/images/3.jpg')
    ],

    selectedImage: 0
  },
  mutations: {
    setSelectedImage (state, value) {
      state.selectedImage = value
    }
  },
  actions: {
  },
  modules: {
  }
})
