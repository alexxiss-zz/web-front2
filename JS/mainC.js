document.addEventListener("DOMContentLoaded", () => {
  const cartItems = [];
  const cartElement = document.getElementById("cart-items");
  const totalElement = document.getElementById("total-amount");
  const paymentModal = document.getElementById("payment-modal");

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  document.getElementById("checkout").addEventListener("click", () => {
    paymentModal.style.display = "block";
  });

  document.getElementById("close-modal").addEventListener("click", () => {
    paymentModal.style.display = "none";
  });

  document.querySelectorAll(".payment-option").forEach((option) => {
    option.addEventListener("click", () => {
      const paymentMethod = option.dataset.method;
      alert(`Compra exitosa con ${paymentMethod}`);
      paymentModal.style.display = "none";
      cartItems.length = 0;
      updateCart();
    });
  });

  function addToCart(event) {
    const courseElement = event.target.parentElement;
    const courseId = courseElement.getAttribute("data-id");
    const courseName = courseElement.getAttribute("data-name");
    const coursePrice = parseFloat(courseElement.getAttribute("data-price"));

    const existingItem = cartItems.find((item) => item.id === courseId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        id: courseId,
        name: courseName,
        price: coursePrice,
        quantity: 1,
      });
    }
    updateCart();
  }

  function updateCart() {
    cartElement.innerHTML = "";
    let total = 0;
    cartItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - S/.${item.price} x ${item.quantity}`;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Eliminar";
      removeButton.addEventListener("click", () => removeFromCart(item.id));
      li.appendChild(removeButton);
      cartElement.appendChild(li);
      total += item.price * item.quantity;
    });
    totalElement.textContent = `S/.${total.toFixed(2)}`;
  }

  function removeFromCart(courseId) {
    const itemIndex = cartItems.findIndex((item) => item.id === courseId);
    if (itemIndex > -1) {
      cartItems.splice(itemIndex, 1);
    }
    updateCart();
  }
});
