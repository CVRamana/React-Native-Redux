import Firebase from 'react-native-firebase';

let config = {
    apiKey: "AIzaSyAaGJGSzKDJz5p3IqP7UIwbjGIQ_Jf7y3A",
    authDomain: "messengerrn-1c00a.firebaseapp.com",
    databaseURL: "https://messengerrn-1c00a.firebaseio.com",
    projectId: "messengerrn-1c00a",
    storageBucket: "messengerrn-1c00a.appspot.com",
    messagingSenderId: "783905684053",
    appId: "1:783905684053:web:c944364084560e5752b2dc",
    measurementId: "G-2XGSF9NGGY"
};
let app = Firebase.initializeApp(config);
export const db = app.database();