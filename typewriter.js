"use strict";
const button = document.getElementById("start");
const text = document.querySelector("h1").textContent.trim();
console.log(text.length);

document.querySelector("h1").textContent = "";
let i = 0;
let delay = 250;
let si = 0;

button.addEventListener("click", startTyping);

function startTyping() {
  button.classList.add("hide");
  document.querySelector("h1").classList.remove("hide");

  if (i < text.length) {
    if (text[i] == " ") {
      //console.log("yes");
      document.getElementById("typespace").play();
      delay = 600;
    } else {
      if (si == 0) {
        document.getElementById("typekey1").play();
        si = 1;
        console.log(si);
      } else {
        document.getElementById("typekey2").play();
        si = 0;
        console.log(si);
      }
    }

    document.querySelector("h1").textContent += text[i];
    i++;

    setTimeout(startTyping, delay + Math.floor(Math.random() * 20));
  } else {
    document.getElementById("typelast").play();
  }
}
