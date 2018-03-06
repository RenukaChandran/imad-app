var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article-one = {
    title: "ARTICLE ONE",
    heading: "HERE'S ARTICLE ONE!!!!",
    author: "RENUKA CHANDRAN",
    content: `
         <p>
                    this is article one.this tag has predefined styling applied.it has small font size compared to the h1 tag's default styling.but i have applied changes using style tag.
         </p> `
};

function createtemplate (dataobj) {
    var title = dataobj.title;
    var heading = dataobj.heading;
    var content = dataobj.content;
    var htmltemplate = `
    
}    
}
app.get('/article-one',function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
