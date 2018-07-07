const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const request = require('request');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getProducts = functions.https.onRequest((req, res) => {
  const apiKey = functions.config().shopify.key;
  const apiPass = functions.config().shopify.pass;
  const hostname = functions.config().shopify.store;
  const url = `https://${apiKey}:${apiPass}@${hostname}/admin/products.json?collection_id=15267954728&limit=250`;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      cors(req, res, () => {});
      const products = JSON.parse(body).products;
      slugProducts = products.map(product => {
        return { title: product.title, url: product.handle }
      })
      res.send(slugProducts);
    }
  })
})

exports.showProducts = functions.https.onRequest((req, res) => {
  res.send('Hello World')
})