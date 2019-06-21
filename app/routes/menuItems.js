module.exports = (app) => {
    const menuItems = require('../controllers/menuItems.js');

    // Create a new category
    app.post('/menuItems', menuItems.create);

    // Retrieve all categories
    app.get('/menuItems', menuItems.findAll);

    app.delete('/menuItems/:menuId', menuItems.delete);
    app.put('/menuItems/:menuId', menuItems.update);
}