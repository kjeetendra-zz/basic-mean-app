module.exports = (app) => {
    const category = require('../controllers/category.js');

    // Create a new category
    app.post('/categories', category.create);

    // Retrieve all categories
    app.get('/categories', category.findAll);

    // Retrieve a single category
    app.get('/category/:catId', category.findOne);

    // Update a category
    app.put('/category/:catId', category.update);

    // Delete a category
    app.delete('/category/:catId', category.delete);
}