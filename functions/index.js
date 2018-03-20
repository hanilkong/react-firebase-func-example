const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jp-db-2018.firebaseio.com"
});
const express = require('express');
const app = express();
const db = admin.firestore();

app.get('/getChannels', (req, res) => {
  // const channelList = db.collection('Channels');
  // let listArray = [];
  // res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  // channelList.get().then(list => {
  //   list.forEach((element, index) => {
  //     listArray.push(element.data());
  //   });
  //   res.json(listArray);
  //   return list.data();
  // }).catch(error => {
  //   console.error(error);
  //   res.json({ code: 404 });
  //   return error;
  // });
  res.json({code: 200})
});

// app.

exports.api = functions.https.onRequest(app)


// exports.hello = functions.https.onRequest((req, res) => {
//   res.send({ code: 200 })
// });