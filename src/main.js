import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'

//
// Firebase
// import { firebase } from '@/data/FirebaseConfig'
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false

//
// Firestore
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
