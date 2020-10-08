const functions = require('firebase-functions')
const admin = require('firebase-admin')
const axios = require('axios')
const slack_url = `${functions.config().slack.url}`

admin.initializeApp()

exports.handleContact = functions.firestore
  .document('contact/{docId}')
  .onCreate((snap) => {
    const data = snap.data()
    const { name, subject, message, email } = data
    const info = `${name}様から${subject}のお問い合わせが届きました。\n\n${message}\n\nメールアドレス: ${email}`
    functions.logger.log(info)
    const jsonData = {
      text: '```' + info + '```',
    }
    try {
      axios.post(slack_url, JSON.stringify(jsonData))
      return true
    } catch (error) {
      functions.logger.log('エラー', error)
      return false
    }
  })
