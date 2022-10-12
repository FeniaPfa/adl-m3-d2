// Ejercicio 1
const borderImg = document.querySelector("#border-img");
const borderBtn = document.querySelector("#border-btn");

borderBtn.addEventListener("click", () =>{
  borderImg.classList.toggle("border");
})

// Ejercicio 2

const sticker1 = document.querySelector("#e-input1");
const sticker2 = document.querySelector("#e-input2");
const sticker3 = document.querySelector("#e-input3");

const checkBtn = document.querySelector("#check-stickers");
const stickerMsg = document.querySelector("#e2-msg");


checkBtn.addEventListener("click", () => {
  const sumaStickers = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);
  console.log(sumaStickers)
  if(sumaStickers > 10) {
    stickerMsg.innerHTML = `Llevas ${sumaStickers} stickers !! (╯°□°）╯︵ ┻━┻ <br> El maximo es 10 🛑!!`
  } else{
    stickerMsg.textContent = `Llevas ${sumaStickers} stickers 👌`
  }
})

// Ejercicio 3

const select1 = document.querySelector("#select-1");
const select2 = document.querySelector("#select-2");
const select3 = document.querySelector("#select-3");

const loginBtn = document.querySelector("#login");
const loginMsg = document.querySelector("#loginMsg");


loginBtn.addEventListener("click", () => {
  if(select1.value == 9 && select2.value == 1 && select3.value == 1){
    console.log("entra if")
    loginMsg.textContent = "Password 1 correcto ✔";
  } else if(select1.value == 7 && select2.value == 1 && select3.value == 4) {
    loginMsg.textContent = "Password 2 correcto ✔";
  } else {
    loginMsg.textContent = "Password incorrecto ❌";
  }
})



