/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    const getProducts = (user, callback) => {

      // set up query
      const queryString = 'SELECT * FROM products';

      // execute query
      dbPoolInstance.query(queryString, (error, queryResult) => {
        // invoke callback function with results after query has executed

            console.log(queryResult)

        callback(error, queryResult);
      });
    };



    return {
      getProducts,
    };
};
