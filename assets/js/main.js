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
    stickerMsg.textContent = `Llevas ${sumaStickers} stickers !! (╯°□°）╯︵ ┻━┻`
  } else{
    stickerMsg.textContent = `Llevas ${sumaStickers} stickers 😎`
  }
})



