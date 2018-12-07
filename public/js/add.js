// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  console.log(localStorage.getItem("emailInput"));

  // Make a newBook object
  var newOrder = {
    productOption: $("#productOption").val().trim(),
    quantity: $("#quantity").val().trim(),
    deliveryAddress: $("#deliveryAddress").val().trim(),
    email: $("#email").val().trim(),
    delivered: false,
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newOrder)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });


    

});
