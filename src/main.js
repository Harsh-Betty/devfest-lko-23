import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

//Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsfEaB_YHzI0YFkNO_lqXEZTUOtIuHRgY",
  authDomain: "devfest-lko-2023.firebaseapp.com",
  projectId: "devfest-lko-2023",
  storageBucket: "devfest-lko-2023.appspot.com",
  messagingSenderId: "863318931592",
  appId: "1:863318931592:web:6cc6629904881d2fbbc73d",
  measurementId: "G-4FC6SFKJFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);