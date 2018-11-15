module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const get = (request, response) => {
      // use pokemon model method `get` to retrieve pokemon data
      db.pokemon.get(request.params.id, (error, queryResult) => {
        // queryResult contains pokemon data returned from the pokemon model
        if (error) {
          console.error('error getting pokemon:', error);
          response.sendStatus(500);
        } else if(queryResult.rows.length > 0){
          // render pokemon.handlebars in the pokemon folder
          console.log( queryResult );
          response.render('pokemon/pokemon', { pokemon: queryResult.rows[0] });
        }else{
          response.sendStatus(404);
        }
      });
  };

  const updateForm = (request, response) => {
      // TODO: Add logic here
  };

  const update = (request, response) => {
      // TODO: Add logic here
  };

  const createForm = (request, response) => {
    response.render('pokemon/new');
  };

  const create = (request, response) => {
      // use pokemon model method `create` to create new pokemon entry in db
      db.pokemon.create(request.body, (error, queryResult) => {
        // queryResult of creation is not useful to us, so we ignore it
        // (console log it to see for yourself)
        // (you can choose to omit it completely from the function parameters)

        if (error) {
          console.error('error getting pokemon:', error);
          response.sendStatus(500);
        }
        console.log( ")909090909090909090909090", queryResult );

        if (queryResult.rowCount >= 1) {
          console.log('Pokemon created successfully');
        } else {
          console.log('Pokemon could not be created');
        }
        // redirect to home page after creation
        response.redirect('/');
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    get,
    updateForm,
    update,
    createForm,
    create
  };

}
