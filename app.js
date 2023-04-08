const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var taskList = ['Buy Food', 'Cook Food', 'Eat Food'];

app.get('/', (req, res) => {
    var today = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var dayType = today.getDay()==6 || today.getDay()==0 ? 'weekend' : 'weekday';
    var date = today.toLocaleDateString('en-US', options);
    res.render('list', {date: date, dayType: dayType, taskList: taskList});
});

app.post('/', (req, res) => {
    var newTask = req.body.newTask;
    taskList.push(newTask);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
