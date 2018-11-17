module.exports = (app, db) => {

  const users = require('./controllers/user')(db);

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

};
