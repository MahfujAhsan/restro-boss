// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCcDsIUb9Wl3SHEeidz0MsFQS6UfN8Xd3U",
//     authDomain: "bistro-boss-restro.firebaseapp.com",
//     projectId: "bistro-boss-restro",
//     storageBucket: "bistro-boss-restro.appspot.com",
//     messagingSenderId: "187576370008",
//     appId: "1:187576370008:web:c2f3d5770651bcd39cdb2d"
// };
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);