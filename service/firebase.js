import firebase from 'firebase'

const fierbaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABSEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
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
    newsList.push({ ...doc.data(), id: doc.id })
  })
  return newsList
}

export async function fetchNewsById(id) {
  const targetNewsRef = newsRef.doc(id)
  let doc = await targetNewsRef.get()
  let newsData = doc.data()
  return newsData
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
    newsList.push({ ...doc.data(), id: doc.id })
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
