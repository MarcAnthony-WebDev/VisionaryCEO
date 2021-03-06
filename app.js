const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.render("home");
});

app.post("/", function() {

})

app.get("/news", function(req, res) {
  res.render("news");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});




app.listen(3000, function(req, res) {
  console.log("Server started on port 3000");
});
