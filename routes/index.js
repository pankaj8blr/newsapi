var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hits', (req, res, next) => {
  request(
    `http://hn.algolia.com/api/v1/search?tags=front_page`,
    (err, response, body) => {
      if (err) {
        return console.log(err);
      }
      // let articles = JSON.parse(body).hits;
      let articles = JSON.parse(body);
      res.send(JSON.stringify(articles));
    }
  );
});

router.get('/search', (req, res, next) => {
  const searchText = req.query.q;
  request(
    `http://hn.algolia.com/api/v1/search?query=${searchText}`,
    (err, response, body) => {
      if (err) {
        return console.log(err);
      }
      let news = JSON.parse(body);
      res.send(JSON.stringify(news));
    }
  );
});
module.exports = router;
