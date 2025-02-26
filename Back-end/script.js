const menuItems = document.querySelectorAll(".menu-item");
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const counter = document.querySelector(".counter span");
const counterElement = document.querySelector(".counter");
const clearCartButton = document.getElementById("clearCart");
function updateCounter() {
  counter.textContent = `عدد العناصر المحددة : ${cartItems.length}`;
  counterElement.style.display = cartItems.length > 0 ? "block" : "none";
}
function addToCart(itemName, itemprice) {
  cartItems.push({ name: itemName, price: itemprice });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCounter();
  swal(`تمت إضافه ${itemName} إلى السلة`);
}
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const itemName = item.querySelector("h4").textContent;
    const itemprice = item.querySelector("p").textContent;
    addToCart(itemName, itemprice);
  });
});
updateCounter();
function updateDataAttributes() {
  menuItems.forEach((item) => {
    const h4Elements = item.querySelectorAll("h4");
    item.dataset.name = h4Elements[0].textContent;
    item.dataset.price = h4Elements[1].textContent;
  });
}
updateDataAttributes();

