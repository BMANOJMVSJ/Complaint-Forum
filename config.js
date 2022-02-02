import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBTfLhgIKGRjpAoApD5_TeJKVpKVb4Sa40",
  authDomain: "complaint-forum-2f81f.firebaseapp.com",
  projectId: "complaint-forum-2f81f",
  storageBucket: "complaint-forum-2f81f.appspot.com",
  messagingSenderId: "651582524259",
  appId: "1:651582524259:web:be753a37580baeadb4e156"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

