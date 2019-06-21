module.exports = (app) => {
    const category = require('../controllers/category.js');

    // Create a new category
    app.post('/categories', category.create);

    // Retrieve all categories
    app.get('/categories', category.findAll);


}