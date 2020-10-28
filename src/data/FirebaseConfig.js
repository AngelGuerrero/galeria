import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB9eptMJJ1SV0YhbKUSnKD4oRwJx06o98I',
  authDomain: 'prueba-a3683.firebaseapp.com',
  databaseURL: 'https://prueba-a3683.firebaseio.com',
  projectId: 'prueba-a3683',
  storageBucket: 'prueba-a3683.appspot.com',
  messagingSenderId: '801115762693',
  appId: '1:801115762693:web:3d8a98b0d6d61188766c6c'
}

// Initialize Firebase
firebase.initializeApp(config)

//
// Firebase utils
const db = firebase.firestore()

export { firebase, db }
