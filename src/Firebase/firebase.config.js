// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // ***
// // import { getAuth } from "firebase/auth";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA1oLwLJinUoe_KY6aXf2gwSCSkViOT1Qk",
//   authDomain: "plate-share-aa2b8.firebaseapp.com",
//   projectId: "plate-share-aa2b8",
//   storageBucket: "plate-share-aa2b8.firebasestorage.app",
//   messagingSenderId: "1080911377965",
//   appId: "1:1080911377965:web:10d46ba8c6c6e293cbeaa4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// // ***
// // export const auth = getAuth(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1oLwLJinUoe_KY6aXf2gwSCSkViOT1Qk",
  authDomain: "plate-share-aa2b8.firebaseapp.com",
  projectId: "plate-share-aa2b8",
  storageBucket: "plate-share-aa2b8.firebasestorage.app",
  messagingSenderId: "1080911377965",
  appId: "1:1080911377965:web:10d46ba8c6c6e293cbeaa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }; // Named Export
