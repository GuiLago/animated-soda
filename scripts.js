const list = document.querySelectorAll(".item");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const listLen = list.length;
let active = 0;

nextBtn.onclick = () => {
  let activated = document.querySelector(".active");
  activated.classList.remove("active");

  active = active >= listLen - 1 ? 0 : active + 1;

  list[active].classList.add("active");
};

prevBtn.onclick = () => {
  let activated = document.querySelector(".active");
  activated.classList.remove("active");

  active = active <= 0 ? listLen - 1 : active - 1;
  list[active].classList.add("active");
};
