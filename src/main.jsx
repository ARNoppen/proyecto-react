import React from "react"
import ReactDOM from "react-dom/client"
import { initializeApp } from "firebase/app";

import './index.css'

import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyDu9Jhf8ZFn9QgF_lVxGibjhTEt2ssM-1g",
  authDomain: "proyecto-react-e8cc3.firebaseapp.com",
  projectId: "proyecto-react-e8cc3",
  storageBucket: "proyecto-react-e8cc3.appspot.com",
  messagingSenderId: "541184759678",
  appId: "1:541184759678:web:f77b2828e36c620ba1052f"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

