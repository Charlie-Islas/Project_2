// The code in add.js handles what happens when the user clicks the "Add a book" button.
$("#userName").text(localStorage.getItem("nameInput"));
// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var sentEmail = localStorage.getItem("emailInput");
  var productId = 0;
  var chosenProduct = $("#productOption");
  var quantity = $("#quantity")
    .val()
    .trim();
  var deliveryAddress = $("#deliveryAddress")
    .val()
    .trim();
  var validNumber=Number.isInteger(parseFloat(quantity));
  console.log(validNumber);

  if (chosenProduct === "Galia") {
    productId = 1;
  } else {
    productId = 2;
  }

  //would be nice to have these validations, as well as those of login and signup in modals instead of alerts
  if (quantity <= 0 || !validNumber) {
    alert(
      "Por favor ingresa un número válido (enteros mayores a cero únicamente)..."
    );
    return;
  }

  if (!quantity || !deliveryAddress) {
    alert(
      "Por favor, introduce la información de todos los campos requeridos para poder procesar tu pedido..."
    );
    return;
  }
  // Make a newBook object
  var newOrder = {
    quantity: quantity,
    deliveryAddress: deliveryAddress,
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
