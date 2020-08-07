const functions = require('firebase-functions')
const admin = require('firebase-admin')
const axios = require('axios')
const slack_url =
  'https://hooks.slack.com/services/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'

admin.initializeApp()

exports.handleContact = functions.firestore
  .document('contact/{docId}')
  .onCreate((snap) => {
    const data = snap.data()
    const { name, subject, message, email } = data

    const jsonData = {
      text:
        '```' +
        `${name}様から${subject}のお問い合わせが届きました。\n\n${message}\n\nメールアドレス: ${email}` +
        '```',
    }
    axios.post(slack_url, JSON.stringify(jsonData))
  })
