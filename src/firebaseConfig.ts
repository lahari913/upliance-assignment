import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJ5Rq_LEFBVFIdN_5yN5Z6iuCaSvGJfqU",
    authDomain: "reactauthproject-100d2.firebaseapp.com",
    projectId: "reactauthproject-100d2",
    storageBucket: "reactauthproject-100d2.firebasestorage.app",
    messagingSenderId: "1006226050160",
    appId: "1:1006226050160:web:6198029231df7feea6b8b5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
