var express = require('express');
var app = express();

app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
  res.render('index', {
   title: 'Homepage',
   content : 'Questa pagina parla del mondo e di tanto altro'
 });
});
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});