const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var workList = ['Complete the course', 'Finish the project', 'Ace the exam',];
var taskList = ['Buy Food', 'Cook Food', 'Eat Food'];

app.get('/', (req, res) => {
    var today = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var date = today.toLocaleDateString('en-US', options);

    res.render('list', {ListTitle: date, taskList: taskList, route: '/'});
});

app.post('/', (req, res) => {
    var newTask = req.body.newTask;
    taskList.push(newTask);
    res.redirect('/');
});

app.get('/work', (req, res) => {
    res.render('list', {ListTitle: 'Work List', taskList: workList, route: '/work'});
});

app.post('/work', (req, res) => {
    var newTask = req.body.newTask;
    workList.push(newTask);
    res.redirect('/work');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
