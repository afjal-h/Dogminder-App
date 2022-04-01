// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuJCiTSzQ9IMLSfMM8eRt5IRhyDnZHKzk",
  authDomain: "dogminder-app.firebaseapp.com",
  projectId: "dogminder-app",
  storageBucket: "dogminder-app.appspot.com",
  messagingSenderId: "103039684105",
  appId: "1:103039684105:web:144ac5e4dd5a4f1628f2d8",
  measurementId: "G-YXSFFWLZ1H"
};



// Initialize Firebase
let app;
if (firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig)

}
else{
    app=firebase.app();
}

const auth= firebase.auth();
export{auth};