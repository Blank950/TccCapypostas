router.post('/signup', (req, res) => {

  const { name, email, password } = req.body;

  console.log(`New user: ${name}, ${email}`);

  res.send(`Account created for ${name}`);

});


router.get('/signup', (req, res) => {
  res.render('SignUp');
});