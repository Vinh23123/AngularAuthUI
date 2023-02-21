import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlAgCkqtTf8y2j1rmiLwVCyOwySSVQ1dY",
  authDomain: "app-1-4e0fa.firebaseapp.com",
  projectId: "app-1-4e0fa",
  storageBucket: "app-1-4e0fa.appspot.com",
  messagingSenderId: "560267366791",
  appId: "1:560267366791:web:b83459320df3523418c322",
  measurementId: "G-B68VTMK8DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAuthUI';
}
