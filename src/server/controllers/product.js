module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const productList = (request, response) => {

      db.product.getProducts(request.body, (error, queryResult) => {

        if (error) {
          console.error('error getting pokemon:', error);
          response.sendStatus(500);
        }

        response.send(queryResult);
      });


  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    productList

  };
};
