// The code in add.js handles what happens when the user clicks the "Add a book" button.
$("#userName").text(localStorage.getItem("nameInput"));
// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var sentEmail = localStorage.getItem("emailInput");
  var productId = 0;
    console.log("add button works");
  var chosenProduct = $("#productOption")
    .val()
    .trim();

  if (chosenProduct === "Galia") {
    productId = 1;
  } else {
    productId = 2;
  }

  // Make a newBook object
  var newOrder = {
    quantity: $("#quantity")
      .val()
      .trim(),
    deliveryAddress: $("#deliveryAddress")
      .val()
      .trim(),
    email: sentEmail,
    delivered: false,
    ProductId: productId
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/orders", newOrder)
    // On success, run the following code
    .then(function() {
      window.location.href = "/members";
    });
});
