module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    const allSubscriptions = (request, response) => {

        db.subscription.getPackage(request.body, (error, queryResult) => {


            if (error) {
                console.error('error getting subscriptions', error);
                response.sendStatus(500);
            }

            response.send(queryResult);
        });

    };


    //get the packages that are unique to a product
    const specificSubscription = (request, response) => {
        console.log(request.params.id)

        db.subscription.getSpecificPackage(request.params.id, (error, queryResult) => {


            if (error) {
                console.error('error getting subscriptions', error);
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
        allSubscriptions,
        specificSubscription

    };
};