module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const newForm = (request, response) => {
    response.render('user/newuser');
  };

  const create = (request, response) => {
      // use user model method `create` to create new user entry in db
      console.log("request.body", request.body)

        db.user.checkusername(request.body.name, (error, result) => {
            console.log("going to create new account", result)


        if (result === true){
            console.log("there is existing username")
            response.render('user/newuser')

        }else{

          db.user.create(request.body, (error, queryResult) => {

            if (error) {
              console.error('error getting user', error);
              response.sendStatus(500);
            }

            if (queryResult.rowCount >= 1) {
              console.log('User created successfully');

              // drop cookies to indicate user's logged in status and username
              response.cookie('loggedIn', true);
              response.cookie('username', request.body.name);

            } else {
              console.log('User could not be created');
            }

            // redirect to home page after creation
            response.redirect('/');
          });
        };

        });

  };

  const logout = (request, response) => {
    console.log("loggin out")
    response.clearCookie('loggedIn');
    response.clearCookie('username');
    response.redirect('/');
  };

  const loginForm = (request, response) => {
    response.render('user/login');
  };

  const login = (request, response) => {

    db.user.login(request.body, (error, queryResult, loginValue) => {

    let redirectUrl = '/user/' + request.body.name

    response.cookie('loggedIn', loginValue);
    response.cookie('username', request.body.name);

    response.redirect('/');
    });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newForm,
    create,
    logout,
    loginForm,
    login
  };
};
