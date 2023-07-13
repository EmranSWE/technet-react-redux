import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBVSoecMtFUznOAop7OmTZ2IQIjvXEDefI',
  authDomain: 'tech-net-28b9a.firebaseapp.com',
  projectId: 'tech-net-28b9a',
  storageBucket: 'tech-net-28b9a.appspot.com',
  messagingSenderId: '852148477073',
  appId: '1:852148477073:web:3fbe0d7b7cc01882d43330',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
