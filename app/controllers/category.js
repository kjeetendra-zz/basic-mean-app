const Category = require('../models/categories');


exports.create = (req, res) => {
    
    const category = new Category({
        name: req.body.name 
    });

    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the category."
        });
    });
};


exports.findAll = (req, res) => {
    Category.find()
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    });
};


exports.findOne = (req, res) => {
    Category.findById(req.params.catId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.catId
            });            
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.catId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving category with id " + req.params.catId
        });
    });
};


exports.update = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Category content can not be empty"
        });
    }


    Category.findByIdAndUpdate(req.params.catId, {
        title: req.body.title
    }, {new: true})
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.catId
            });
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.catId
            });                
        }
        return res.status(500).send({
            message: "Error updating category with id " + req.params.catId
        });
    });
};


exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.catId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.catId
            });
        }
        res.send({message: "Category deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.catId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Category with id " + req.params.catId
        });
    });
};