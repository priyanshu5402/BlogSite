const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');
// express app
const app = express();

//connect to mongoDB
const dbURI =
  "mongodb+srv://optimus:panu5402@blogsite.ixglm.mongodb.net/blogsite?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((results)=> app.listen(3000))
.catch((err)=>console.log(err));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


// register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
res.redirect('/blogs');
 });

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog route
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});


