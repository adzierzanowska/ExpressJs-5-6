const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static("styles"));

app.get('/', (req, res) => {
    res.render('first-template');
});

 app.get('/styles/first-template.css', (req, res) => {
    res.sendFile(__dirname + '/styles/first-template.css');
});

app.get('/auth/google', (req, res) => {
    res.render('google');
});

app.listen(3000);
app.use((req, res, next) => {
    res.status(404).send('Error 404!');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});
