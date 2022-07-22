import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyAf7GcchakI_Fc5cSapvR0C3Ry2s0z8glk",
  authDomain: "meuapp-7e682.firebaseapp.com",
  databaseURL: "https://meuapp-7e682-default-rtdb.firebaseio.com",
  projectId: "meuapp-7e682",
  storageBucket: "meuapp-7e682.appspot.com",
  messagingSenderId: "630180132932",
  appId: "1:630180132932:web:59a3105d2cd0b976ae2411",
  measurementId: "G-CF82MX8X42"
};

if(!firebase.apps.length){
  //Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;