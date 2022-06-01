import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAWMxuMBfehn5LmNlWCgvBhVrb0A95d_Yg",
  authDomain: "portfolio-58719.firebaseapp.com",
  projectId: "portfolio-58719",
  storageBucket: "portfolio-58719.appspot.com",
  messagingSenderId: "698252240487",
  appId: "1:698252240487:web:f21bfb0fbe11704a4716c2"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth