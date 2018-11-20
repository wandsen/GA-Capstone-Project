module.exports = (dbPoolInstance) => {
    const getPackage = (user, callback) => {

      const queryString = 'SELECT * FROM subscriptions';

      dbPoolInstance.query(queryString, (error, queryResult) => {

        callback(error, queryResult);
      });

    };

    const getSpecificPackage = (item , callback) => {

      console.log("item", item)

      const queryString = 'SELECT * FROM subscriptions INNER JOIN products ON (products.id = subscriptions.product_id) WHERE products.id=$1';
      const values = [item];

      dbPoolInstance.query(queryString, values,  (error, queryResult) => {

        callback(error, queryResult);
      });

    };




    return {
      getPackage,
      getSpecificPackage
    };
};