import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCouZKfbO0n2OHp4IhAdmwspXWUvZmC13A",
    authDomain: "firestore-demo-cfd52.firebaseapp.com",
    databaseURL: "https://firestore-demo-cfd52-default-rtdb.firebaseio.com",
    projectId: "firestore-demo-cfd52",
    storageBucket: "firestore-demo-cfd52.appspot.com",
    messagingSenderId: "603153620147",
    appId: "1:603153620147:web:03aaa310e0e23397e264c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export {
    storage,firebase as default
}