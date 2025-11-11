import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1oLwLJinUoe_KY6aXf2gwSCSkViOT1Qk",
  authDomain: "plate-share-aa2b8.firebaseapp.com",
  projectId: "plate-share-aa2b8",
  storageBucket: "plate-share-aa2b8.appspot.com",
  messagingSenderId: "1080911377965",
  appId: "1:1080911377965:web:10d46ba8c6c6e293cbeaa4"
};

const app = initializeApp(firebaseConfig);
export { app };
