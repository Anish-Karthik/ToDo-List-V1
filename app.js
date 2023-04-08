const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    var today = new Date();
    var cuurentDay = today.getDay();
    var day = '';

    if (cuurentDay === 6 || cuurentDay === 0) {
        day = 'Weekend';
    } else {    
        day = 'Weekday';
    }
    res.render('list', {kindOfDay: day});
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
