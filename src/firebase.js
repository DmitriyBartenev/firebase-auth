import firebase from  'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDKPbY4WcZ0PNqDuPtlsCP7HPP4sSs-OQ0",
  authDomain: "auth-development-290b7.firebaseapp.com",
  projectId: "auth-development-290b7",
  storageBucket: "auth-development-290b7.appspot.com",
  messagingSenderId: "875585816732",
  appId: "1:875585816732:web:07e4e90cfa6f8d1311c559"
})
  
export const auth = app.auth()
export default app