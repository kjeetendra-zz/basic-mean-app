const MenuItem = require('../models/menuItems');


exports.create = (req, res) => {
    const menuItem = new MenuItem({
        name: req.body.name,
        category: req.body.category,
        price_small: req.body.price_small,
        price_large: req.body.price_large 
    });


    menuItem.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the menuItem."
        });
    });
};


exports.findAll = (req, res) => {
    MenuItem.find()
    .then(menuItems => {
        res.send(menuItems);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving menuItems."
        });
    });
};


exports.delete = (req, res) => {
    MenuItem.findByIdAndRemove(req.params.menuId)
    .then(menuItem => {
        if(!menuItem) {
            return res.status(404).send({
                message: "MenuItem not found with id " + req.params.menuId
            });
        }
        res.send({message: "MenuItem deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "MenuItem not found with id " + req.params.menuId
            });                
        }
        return res.status(500).send({
            message: "Could not delete menuItem with id " + req.params.menuId
        });
    });
};

exports.update = (req, res) => {
   
MenuItem.findByIdAndUpdate(req.params.menuId, {
    name: req.body.name,
    category: req.body.category,
    price_small: req.body.price_small,
    price_large: req.body.price_large
}, {new: true})
.then(menuItem => {
    if(!menuItem) {
        return res.status(404).send({
            message: "MenuItem not found with id " + req.params.menuId
        });
    }
    res.send(menuItem);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "MenuItem not found with id " + req.params.menuId
        });                
    }
    return res.status(500).send({
        message: "Error updating menu with id " + req.params.menuId
    });
});
}