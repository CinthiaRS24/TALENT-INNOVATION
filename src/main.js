import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyB-Rikk_8ZqwmpZ37asWYoZAEs6B-MJEl4",
  authDomain: "talent-chat.firebaseapp.com",
  projectId: "talent-chat",
  storageBucket: "talent-chat.appspot.com",
  messagingSenderId: "555283859392",
  appId: "1:555283859392:web:ec918f8638e7857fde2a25"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Esta función corre cada vez que el usuario inicia/cierra sesión
firebase.auth().onAuthStateChanged((x) => {
  console.log('x', x)
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})


