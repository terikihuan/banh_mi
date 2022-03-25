const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const closeCartBtn = document.querySelector(".close-cart")
const cartBtn = document.getElementsByClassName("cart-btn")

function showCart() {
  cartOverlay.classList.add('transparentBcg')
  cartDOM.classList.add('showCart')
}
function hideCart() {
  cartOverlay.classList.remove('transparentBcg')
  cartDOM.classList.remove('showCart')
}


document.addEventListener("DOMContentLoaded", () => {
  let buttonArr = [...cartBtn]
  buttonArr.forEach(button => {
    button.addEventListener('click', showCart)
  });
  closeCartBtn.addEventListener('click', hideCart)
})







