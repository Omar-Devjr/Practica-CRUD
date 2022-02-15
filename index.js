 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBHs20BFkmRC2tA1hcn8JQ_5EIZK3yoz0E",
   authDomain: "fir-js-crud-75a73.firebaseapp.com",
   projectId: "fir-js-crud-75a73",
   storageBucket: "fir-js-crud-75a73.appspot.com",
   messagingSenderId: "38358800655",
   appId: "1:38358800655:web:ae13961a94c5cfe66b067a"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 
 //Codigo

window.addEventListener("DOMContentLoaded",  () => {

})

const taskForm = document.getElementById("task-form")

taskForm.addEventListener('submit', (e) => {
  e.preventDefault()

console.log("submitted")

})

 