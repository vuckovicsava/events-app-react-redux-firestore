import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCV9ZICpYAjefIOnGYRXbDBTf2XFY9_6ZU',
  authDomain: 'events-app-2acd8.firebaseapp.com',
  databaseURL: 'https://events-app-2acd8.firebaseio.com',
  projectId: 'events-app-2acd8',
  storageBucket: 'events-app-2acd8.appspot.com',
  messagingSenderId: '835837353025'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
