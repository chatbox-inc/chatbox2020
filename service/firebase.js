import firebase from 'firebase/app'
import 'firebase/firestore'

const fierbaseConfig = {
  apiKey: 'AIzaSyCIfQPTBbAWN0V64gMP-3fivC5JUPPahWM',
  authDomain: 'chatbox2020-26423.firebaseapp.com',
  databaseURL: 'https://chatbox2020-26423.firebaseio.com',
  projectId: 'chatbox2020-26423',
  storageBucket: 'chatbox2020-26423.appspot.com',
  messagingSenderId: '242233420493',
  appId: '1:242233420493:web:3c9af8562c50efc7211784',
  measurementId: 'G-HK4N2HNG5Q',
}
if (!firebase.apps.length) {
  firebase.initializeApp(fierbaseConfig)
}

export async function submitContact(form) {
  const { name, email, subject, message } = form
  contactRef.add({
    name,
    email,
    subject,
    message,
    createdAt: new Date.now(),
  })
}
