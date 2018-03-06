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

function createTemplate (dataobj) {
    var title = dataobj.title;
    var heading = dataobj.heading;
    var content = dataobj.content;

    var htmltemplate = `
    <html>
    <head>
        <title>
            $(title)
        </title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='/ui/style.css' ref='stylesheet' />
    </head>
    <body>
        <div class='art1'>
            <div>
                <a href='/'>HOME</a>
            </div>
            <hr>
            <h2>
                $(heading)
            </h2>
            <h3>
                $(author)
            </h3>
            <div>
               $(content)
            </div>
        </div>
    </body>
</html> `;

return htmlTemplate;
}


}
app.get('/article-one',function (req, res) {
   res.send(createTemplate(article-one));
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
