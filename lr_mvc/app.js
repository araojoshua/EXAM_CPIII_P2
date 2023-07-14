const express = require('express');
const app = express();
const HomeController = require('./controllers/HomeController');
const AccountController = require('./controllers/AccountController');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

app.get('/', AccountController.login);
app.get('/home', HomeController.index);
app.get('/register', AccountController.register);


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

