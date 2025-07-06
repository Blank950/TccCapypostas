const express = require('express');
const app = express();
const PORT = 6969;


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.redirect('/login'));

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login:', email, password);
  res.send('Login attempted');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log('Signup:', username, email, password);
  res.send('Signup bem sucedido');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
