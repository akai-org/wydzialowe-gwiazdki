import * as firebase from 'firebase';

const databaseConfig = {
  apiKey: 'AIzaSyBcpzCPJttC1vOlq_Khm203662wg61cTz8',
  authDomain: 'wydzialowe-gwiazdki.firebaseapp.com',
  databaseURL: 'https://wydzialowe-gwiazdki.firebaseio.com',
  projectId: 'wydzialowe-gwiazdki',
  storageBucket: '',
  messagingSenderId: '5779775193'
};

firebase.initializeApp(databaseConfig);

export const database = firebase.database();
