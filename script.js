// Cart functionality
var cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCart();
}

function updateCart() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  var total = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];

    var li = document.createElement('li');
    li.textContent = cartItem.name + ' - $' + cartItem.price;
    cartItemsElement.appendChild(li);

    total += cartItem.price;
  }

  var cartTotalElement = document.getElementById('cart-total');
  cartTotalElement.textContent = total;
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
  var addToCartButtons = document.querySelectorAll('.product button');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var product = event.target.parentNode;
      var productName = product.querySelector('h3').textContent;
      var price = parseFloat(product.querySelector('p').textContent.substr(1));
      addToCart(productName, price);
    });
  });

  var checkoutButton = document.getElementById('checkout-btn');
  checkoutButton.addEventListener('click', function() {
    // Perform checkout logic
    console.log('Checkout clicked');
  });
});
