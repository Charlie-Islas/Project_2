$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
     // $(".member-name").text(data.contactName);
  });

  $(document).on("click", "#newOrder", function(event) {
    event.preventDefault();
    console.log("entra al click de nuevo pedido");
    // Make a newBook object
    var email = $("#userEmail").text();
    console.log(email);

    // Send an AJAX POST-request with jQuery
     /* $.post("/api/new", newOrder)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
        
      });*/

    $.get("/add", function(data) {
      console.log(data);
      console.log("access the route to send add with an email");
      window.location.href = "/add";
    });
  });
});
