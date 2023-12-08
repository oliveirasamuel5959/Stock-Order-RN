import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBf7kRxAbiYHZG52SLmxt-lz4lPu1s6zsQ',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'your-project-id-1234',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(initializeApp(firebaseConfig))
const database = getFirestore(app)
export {database}