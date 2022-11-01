const express = require("express");
const bodyparser = require("body-parser");

let items = ["Buy food" , "Cook Food", "Eat Food"];

const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday:'long',
    day:"numeric",
    month:"long"
  };

  let day =today.toLocaleDateString("hi-IN" , options);
  
  res.render("list", { listtitle: day , newlistitem: items});
});

app.post("/" , function(req,res)
{
  var item = req.body.newitem;
  items.push(item);
  res.redirect("/");
})

app.listen(process.env || 3000, function () {
  console.log("server is running on port 3000");
});
