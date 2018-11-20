module.exports = (app, db) => {

  const users = require('./controllers/user')(db);
  const products = require('./controllers/product')(db);
  const subscriptions = require('./controllers/subscription')(db);

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

  app.get('/users/login', users.loginForm);
  app.post('/users/login', users.login);

  //get product data
  app.get('/products', products.productList);


  //get subscription data
  app.get('/subscriptions', subscriptions.allSubscriptions);
  app.get('/subscriptions/:id', subscriptions.specificSubscription);


};
