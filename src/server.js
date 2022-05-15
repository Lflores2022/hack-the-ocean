 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD4Kb-OVh3uQPSyYzpf7QaF2vywXALSEm0",
   authDomain: "hackathon-54600.firebaseapp.com",
   databaseURL: "https://hackathon-54600-default-rtdb.firebaseio.com",
   projectId: "hackathon-54600",
   storageBucket: "hackathon-54600.appspot.com",
   messagingSenderId: "554569980306",
   appId: "1:554569980306:web:b23c7a8404ea153899094b"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const listAnimals = () => getDocs(collection(db, 'animals'))



