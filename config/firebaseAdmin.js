const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://achiko-be-default-rtdb.firebaseio.com"
});

const database = admin.database()
const userRef = database.ref('/users')

module.exports = userRef