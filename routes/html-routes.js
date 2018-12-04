// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    //res.render("members", req.user);
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    //console.log(req.email);
    //res.sendFile(path.join(__dirname, "../public/members.html"));
    var hbsObject = req.user;

    db.Order.findAll({
      where: {
        email: req.user.email
      }
    }).then(function(data) {
      console.log(data);
      var orders={};
      for (var i = 0; i < data.length; i++) {
        orders.i = data[i].dataValues;
      }
      console.log(orders);

        hbsObject.orders = data;
      
     // }
     /* hbsObject.orders = {
        orders: data
      };*/
      console.log(hbsObject);
      res.render("members", hbsObject);
    });

    //res.render("members", req.user);
  });
};
