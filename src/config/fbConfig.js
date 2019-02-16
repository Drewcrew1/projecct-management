import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyAgzX3sHAXnpUrrcOxHbOXWGP9RdN7Jxko",
    authDomain: "project-management-67d28.firebaseapp.com",
    databaseURL: "https://project-management-67d28.firebaseio.com",
    projectId: "project-management-67d28",
    storageBucket: "project-management-67d28.appspot.com",
    messagingSenderId: "46568139150"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 