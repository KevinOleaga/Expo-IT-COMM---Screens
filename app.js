const express = require('express');
const bodyParser = require('body-parser');
// Init app
const app = express();

/************************** Public Folder ****************************/
app.use(express.static('./public'));

/************************** Server Config ****************************/
const port = 8000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

/************************* Handlebars Config **************************/
app.set('view engine', 'ejs');


app.get('/Screen40_1', function (req, res) {
    res.render('Screen40_1');
});

app.get('/Screen40_2', function (req, res) {
    res.render('Screen40_2');
});

app.get('/Screen40_3', function (req, res) {
    res.render('Screen40_3');
});

app.get('/Screen40_4', function (req, res) {
    res.render('Screen40_4');
});

app.get('/Screen50_1', function (req, res) {
    res.render('Screen50_1');
});

app.get('/Screen50_2', function (req, res) {
    res.render('Screen50_2');
});

/************************* Body-Parser Config **************************/
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

