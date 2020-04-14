const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/servicestaff"
);

const itemSeed = [
  {
    name: "Jeret Clark",
    establishment: "Bar Maven altercation",
    review: "So there I was, mixing a drink when all of a sudden.."
  },
  {
    name: "Spencer Purcell",
    establishment: "Cubo",
    review:
      "Well, here's the gist of it...",
    date: new Date(Date.now())
  },
  
  {
    name: "Chase Andersen",
    establishment: "confrontational customer nearly cost me my job.",
    review:
      "this one time at code school...",
    date: new Date(Date.now())
  },
  {
    name: "Max Skewes",
    establishment: "So I used to work at...",
    review:
      "I was recently accused of ", 
    date: new Date(Date.now())
  }
  
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
