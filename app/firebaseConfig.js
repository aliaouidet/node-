import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyA1hhTWKcC2pfOQbhCLuWL-n6pTeqxpK3I",
  authDomain: "nextproject-14f5e.firebaseapp.com",
  projectId: "nextproject-14f5e",
  storageBucket: "nextproject-14f5e.appspot.com",
  messagingSenderId: "980293245273",
  appId: "1:980293245273:web:b0388f122fc283d23c5448"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
