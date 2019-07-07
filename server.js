const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {data: null, error: null});
})
var url = './info.json';

app.post('/', function (req, res) {
 

  request(url, function (err, response, body) {
   
      let data = require(url);
      console.log(data);
      // if(weather.user == undefined){
      //   res.render('index', {weather: null, error: 'Error, please try again!!'});
      // } else {
        let Text = `It's ${data.User} followers number ${data.Followers}!`;
        res.render('index', {data: Text, error: null});
      //}
    
  });
})

app.listen(3000, function () {
  console.log(' app listening on port 3000!')
})
