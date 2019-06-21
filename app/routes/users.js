module.exports = (app) => {
    const User = require('../controllers/user.js');

    // Create a new category
    app.post('/menuItems', menuItems.create);

    // Retrieve all categories
    app.get('/menuItems', menuItems.findAll);

}