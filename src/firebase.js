import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { create } from "zustand";

const firebaseConfig = {
  apiKey: "AIzaSyAUd8pdT0rl2OALE0570YLbHi9dN06Yj3E",
  authDomain: "gymwebsite-a8cb6.firebaseapp.com",
  projectId: "gymwebsite-a8cb6",
  storageBucket: "gymwebsite-a8cb6.appspot.com",
  messagingSenderId: "75056614927",
  appId: "1:75056614927:web:32317d6396096d22379d7a",
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


export const fetchProducts = async () => {
  const collectionRef = collection(db, 'products');
  const snapshot = await getDocs(collectionRef);
  const products = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return products;
};


export const getproduct = async (id) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('No such product!');
  }
};

