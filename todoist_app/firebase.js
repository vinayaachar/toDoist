import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBiX0ePQ-2Q_L5CIgPWjm0cB1OLe3jD4Cs',
  authDomain: 'todoist-app-4716c.firebaseapp.com',
  databaseURL: 'https://todoist-app-4716c.firebaseio.com',
  projectId: 'todoist-app-4716c',
  storageBucket: 'todoist-app-4716c.appspot.com',
  messageSenderId: '712378077172',
  apiId: '1:712378077172:web:aac9703b0aa6de2a1f73a1',
});


export {firebaseConfig as firebase};