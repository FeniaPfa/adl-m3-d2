// Ejercicio 1
const borderImg = document.querySelector("#border-img");
const borderBtn = document.querySelector("#border-btn");

borderBtn.addEventListener("click", () =>{
  borderImg.classList.toggle("border");
})