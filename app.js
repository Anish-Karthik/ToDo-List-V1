const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = today.toLocaleDateString('en-US', options);

    res.render('list', {date: date});
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
