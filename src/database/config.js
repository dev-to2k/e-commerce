import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqQ7m3U4Gs2aRC5fZrG2mO5Jju7aulMhI',
  authDomain: 'e-commerce-b5f3a.firebaseapp.com',
  projectId: 'e-commerce-b5f3a',
  storageBucket: 'e-commerce-b5f3a.appspot.com',
  messagingSenderId: '676939619280',
  appId: '1:676939619280:web:5f1d1a6cd7fbecfa6937d5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
