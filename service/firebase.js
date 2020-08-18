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

//database variables
const db = firebase.firestore()
const newsRef = db.collection('news')
const contactRef = db.collection('contact')
const limit = 5

export function addNewsData() {
  newsRef.add({
    category: 'テスト昔のデータ',
    text: 'テストデータです！！',
    title: 'テストタイトルを入力',
    thumbnail: 'https://chatbox-inc.com/images/brand_top.jpg',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
}

export async function fetchNews() {
  const newsList = []
  const snapShot = await newsRef.orderBy('createdAt', 'desc').limit(limit).get()
  snapShot.forEach((doc) => {
    newsList.push({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toDate(),
    })
  })
  return newsList
}

export async function fetchAllNews() {
  const newsList = []
  const snapShot = await newsRef.orderBy('createdAt', 'desc').get()
  snapShot.forEach((doc) => {
    newsList.push({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toDate(),
    })
  })
  return newsList
}

export async function fetchNewsById(id) {
  const db = firebase.firestore()
  const userRef = await db.collection('news').doc(id)
  const doc = await userRef.get()
  let news = doc.data()
  return news
}

export async function fetchNewsByYear(year) {
  const startDate = new Date(`January 1, ${year} 12:00 AM`)
  const endDate = new Date(`December 31, ${year} 11:59 PM`)
  const newsList = []
  const snapShot = await newsRef
    .orderBy('createdAt', 'desc')
    .where('createdAt', '>=', startDate)
    .where('createdAt', '<=', endDate)
    .get()
  snapShot.forEach((doc) => {
    newsList.push({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toDate(),
    })
  })
  return newsList
}

export async function submitContact(form) {
  const { name, email, subject, message } = form
  contactRef.add({
    name,
    email,
    subject,
    message,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
}
