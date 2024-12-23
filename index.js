const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//setting middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); //server static file (CCS)
app.set('view engine', 'ejs'); //set ejs

let todos = []; //arrey to store todos

//Define a route
app.get('/', (req,res) => {
    res.render('index', {todos});
});

app.post('/add', (req,res) =>{
    const newTodo = req.body.todo;
    if (newTodo) todos.push(newTodo); // Add new task to task list
    res.redirect('/');
});

app.post('/delete',(req,res) => {
    const index = req.body.index;
      // Check if the index is valid
        todos.splice(index, 1); // Remove the task at the specified index
        res.redirect('/'); // Redirect to the home page after deletion
});

//start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});