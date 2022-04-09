import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCdj5dPiMqwbzPkOsVc3ocqjzdDDnvn6h8",
  authDomain: "rn-instagram-2e23c.firebaseapp.com",
  projectId: "rn-instagram-2e23c",
  storageBucket: "rn-instagram-2e23c.appspot.com",
  messagingSenderId: "842015706140",
  appId: "1:842015706140:web:492874fec8fc42d3dee3d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig) 

export default firebase;