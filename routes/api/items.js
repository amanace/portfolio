const express = require('express');
const routes = express.Router();

const Item = require('../../models/item');

//@route GET api/item
//desc
//access public
routes.get('/',(req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items
            ));
});

//@route POST api/item
//desc  create a item 
//access public
routes.post('/',(req, res) => {
    const newItem =new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//@route DELETE api/item
//desc  delete a item 
//access public
routes.delete('/:id',(req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = routes;