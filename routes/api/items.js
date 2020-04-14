const express = require("express");
const router = express.Router();

//Bring in model to make queries

const Item = require("../../models/item");

// Get api/items
//finds items from db / empty array
//returns promise
router.get("/" , (req, res) => {
  Item.find()
  .sort({ date: -1 })
  .then(items => res.json(items))
})


module.exports = router;