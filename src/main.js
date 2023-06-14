import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyAu-irIZ-dHH976gG_ibJBxBcbqkqpPo-8",

    authDomain: "college-diplo.firebaseapp.com",
  
    projectId: "college-diplo",
  
    storageBucket: "college-diplo.appspot.com",
  
    messagingSenderId: "127796715777",
  
    appId: "1:127796715777:web:0ba6db4261b31b7b077b00",
  
    measurementId: "G-M46D72KKMB"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
