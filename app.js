const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

//Server logic for page routing
const app = express();

//Sets templating for webpages that repeat
app.set('view engine', 'ejs');

//Required for body-parser form reading
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.render('home', {
    //Content link to image stored in file

    content: homeStartingContent,
    posts: posts,
  });
});

//Required to allow express server to listent to REST commands GET POST DELETE UPDATE
app.listen(process.env.PORT || 8080, function () {
  console.log('Server started on port 8080');
});
