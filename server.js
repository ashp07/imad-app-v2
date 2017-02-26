var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

 var articles = {
  'article-one' : {
  title:'Article one | Ashish',
  heading:'Article one',
  date:'feb11 2017',
  content: `       <p>
                    The content of article one is today's date. The content of article one is today's date. The content of article one is today's date. The content of article one is today's date. The content of article one is today's date
                  </p>
                   
                  <p>
                       The content of article one is today's date. The content of article one is today's date. The content of article one is today's date. The content of article one is today's date. The content of article one is today's date
                  </p>`
  },
  'article-two' : {
  title:'Article two | Ashish',
  heading:'Article two',
  date:'feb12 2017',
  content: `       <p>
                    The content of article two is today's date.
                    <p>`
  },
  'article-three' : {
  title:'Article three | Ashish',
  heading:'Article three',
  date:'feb12=3 2017',
  content: `       <p>
                    The content of article three is today's date.
                    <p>`
  }
 };

function createTemplate (data) 
{
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;

var htmlTemplate= `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/> 
        <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
      <div class="container">
          <div>
             <a href='/'>Home</a>  
          </div>
            ${heading}     
          <div>
            ${date}
          </div>
        ${content}
      </div>
   </body>
</html>
   `;
   return htmlTemplate;
}

var counter=0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submit-name' , function(req,res){ //URL:sumbit-name?name=zbcde
  var name= req.query.name;
  names.push(name);
  //JSON: Javascript object Notation
  res.send(JSON.stringify(names));
  
  
});

app.get('/:articleName', function (req,res) {
   // articleName == article-one
   // articles[articleName] == {} content object for article one
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
    console.log(`IMAD course app listening on port ${port}!`);
});
