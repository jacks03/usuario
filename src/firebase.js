import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhKQ3TaROSWKmoIPyuDqHiruJ7vamZvpA",
  authDomain: "fir-a5329.firebaseapp.com",
  projectId: "fir-a5329",
  storageBucket: "fir-a5329.appspot.com",
  messagingSenderId: "745406169224",
  appId: "1:745406169224:web:0ab6ddb87a7afcd0f29f3d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app);