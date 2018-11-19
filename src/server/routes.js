module.exports = (app, db) => {

  const users = require('./controllers/user')(db);
  const products = require('./controllers/product')(db);

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
  app.get('/users/new', users.newForm);
  app.post('/users', users.create);

  // Authentication
  app.post('/users/logout', users.logout);


  // app.post('/users/logout', (req, res) => {
  //   console.log(req.body)
  //   let text = 'text'
  //   res.json({text})
  // })
  app.get('/users/login', users.loginForm);
  app.post('/users/login', users.login);

  //products
  app.get('/products', products.productList);

};
