import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgMZhbVQCZQ1gDtKntktzP9ql7mMalG2E",
  authDomain: "portfolio-53356.firebaseapp.com",
  projectId: "portfolio-53356",
  storageBucket: "portfolio-53356.appspot.com",
  messagingSenderId: "216561052749",
  appId: "1:216561052749:web:86cf59ef00ecc5912a0004",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      const donation = doc.data();
      donation.id = doc.id;
      arr.push(donation);
    });
    window.sessionStorage.setItem("@PRODUCTS", JSON.stringify(arr));
    return arr;
  } catch (err) {
    console.error("Error geting documents: ", err);
  }
}
