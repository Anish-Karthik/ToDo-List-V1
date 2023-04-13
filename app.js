const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var workList = ['Complete the course', 'Finish the project', 'study for exam'];
var taskList = ['Complete the course', 'Finish the project', 'study for exam'];

app.get('/', (req, res) => {
    res.render('list', {ListTitle: date.getDate(), taskList: taskList, route: '/'});
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port 3000');
});
