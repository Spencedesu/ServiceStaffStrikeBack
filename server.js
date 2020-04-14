const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models");

const items = require("./routes/api/items")

const app = express();

//Use bodyparser
app.use(bodyParser.json())

// DB connection
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/servicestaff")

// Routes
// app.use("/api/items", items);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`app listening at ${port}`))

/// NEW ABOVE /// 
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.get('/api/posts', function(req, res){
  db.Item
      .find({})
      .sort({ date: -1 })

      .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err)); 
});


// app.post('/api/posts', function( req, res){
//   console.log(req.body);
//   const item = {
//     username : req.body.username, 
//     establishment: req.body.establishment, 
//     review: req.body.review
//   }
//   res.json( item );
// });

// app.listen(5000);