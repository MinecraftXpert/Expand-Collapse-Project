const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");

btn1.addEventListener("click", () => {
  if (card1.classList.toggle("show")) {
    btn1.innerHTML = "Collapse";
  } else {
    btn1.innerHTML = "Expand";
  }
});

btn2.addEventListener("click", () => {
  if (card2.classList.toggle("show")) {
    btn2.innerHTML = "Collapse";
  } else {
    btn2.innerHTML = "Expand";
  }
});

btn3.addEventListener("click", () => {
  if (card3.classList.toggle("show")) {
    btn3.innerHTML = "Collapse";
  } else {
    btn3.innerHTML = "Expand";
  }
});

btn4.addEventListener("click", () => {
  if (card1.classList.toggle("show")) {
    btn4.innerHTML = "Collapse";
  } else {
    btn1.innerHTML = "Expand";
  }
});
