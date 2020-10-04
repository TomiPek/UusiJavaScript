// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
  "use strict";

  // For storing the order total:
  var total = document.getElementById("total");

  // Get references to the form values:
  var quantity = document.getElementById("quantity").value;
  var maara = parseInt(quantity);

  var price = document.getElementById("price").value;
  var tax = document.getElementById("tax").value;
  var verot = parseFloat(tax);
  var discount = document.getElementById("discount").value;
  var ale = parseFloat(discount);
  var ship = document.getElementById("shipping").value;
  var laiva = parseInt(ship);

  // Add validation here later!

  // Calculate the initial total:

  total = maara * price + laiva;
  if (total >= 100) {
    total = total - laiva;
    console.log("total before tax: " + total);
  }
  // Make the tax rate easier to use:
  verot = verot / 100;
  verot = verot + 1;

  // Factor in the tax:
  total = total * verot;
  console.log("total after tax: " + total);

  // Factor in the discount:
  if (maara >= 100) {
    total = total - ale * 2;
    console.log("total after discount: " + total);
  }
  if (maara < 100) {
    total = total - ale;
    console.log("total after discount: " + total);
  }

  // Format the total to two decimal places:
  total = total.toFixed(2);

  // Display the total:
  document.getElementById("total").value = total;

  // Return false to prevent submission:
  return false;
} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
  "use strict";

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;
