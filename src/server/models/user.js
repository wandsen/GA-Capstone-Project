const sha256 = require('js-sha256');

const SALT = 'HarryPotter';


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    const create = (user, callback) => {

      // set up query
      const queryString = 'INSERT INTO users (name, email, password, location) VALUES ($1, $2, $3, $4)';

      var hashedPassword = sha256(SALT + user.password);

      const values = [
        user.name,
        user.email,
        hashedPassword,
        user.location
      ];

      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    const get = (id, callback) => {
      // set up query
      const queryString = 'SELECT * from users WHERE id=$1';
      const values = [id];

      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    const checkusername = (user, callback) => {

        let currentuser = user
        console.log("current user", user)
        // set up query
        const queryString = 'SELECT name FROM users';


        // execute query
        dbPoolInstance.query(queryString, (error, queryResult) => {
            console.log('check username result', queryResult.rows)

            let checkresult = false;

            queryResult.rows.forEach((element) => {
                console.log('executing function', element.name)


                if (currentuser === element.name) {
                    checkresult = true;
                    console.log('there is an existing username')
                }

            });

            //if there is no existing username go on to create account
            if (checkresult === false) {
                console.log("there is no such username")
                callback(error, false)
            }else{
                callback(error, true)
            }


        });
    };

    const login = (user, callback) => {
        console.log("logging in model")



      let hashedValue = sha256(SALT + user.password);

        const queryString = 'SELECT * FROM users';

        dbPoolInstance.query(queryString, (error, queryResult) => {

            let authenticationResult;

            queryResult.rows.forEach((element) => {

                if (user.name === element.name) {

                    if (hashedValue === element.password) {
                        console.log("this is the correct user and password")
                        authenticationResult = true;

                    } else {
                        console.log("this is the wrong password")
                    }


                } else {
                    console.log("there is no such username")
                }

            });
            if (authenticationResult === true) {
                let loginValue = sha256(SALT + user.password)
                console.log("cookie loginvalue: ", loginValue)
                callback(error, queryResult, loginValue)
            }

        });
    }

    return {
      create,
      checkusername,
      get,
      login
    };
};
