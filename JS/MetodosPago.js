document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const itemsCarrito = document.getElementById("itemsCarrito");
    const totalElement = document.getElementById("total");
    const comprarBtn = document.getElementById("comprarBtn");
    const modal = document.getElementById("modalPago");
    const cancelarBtn = document.getElementById("cancelar");

    let total = 0;

    document.querySelectorAll(".agregar").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let precio = index === 0 ? 49.99 : 24.99;
            carrito.push(precio);
            actualizarCarrito();
        });
    });

    comprarBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    cancelarBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    function actualizarCarrito() {
        itemsCarrito.innerHTML = carrito.map((item, i) => `<p>Item ${i + 1} - S/.${item.toFixed(2)}</p>`).join("");
        total = carrito.reduce((acc, item) => acc + item, 0);
        totalElement.innerText = total.toFixed(2);
    }
});
