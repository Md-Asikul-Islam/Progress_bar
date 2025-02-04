const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const iconsWrapper = document.querySelectorAll(".icon-wrapper");

let currentSelectedStep = 1;

nextBtn.addEventListener("click", () => {
  if (currentSelectedStep < iconsWrapper.length) {
    currentSelectedStep++;
  }

  handleUpdateStep();
});


prevBtn.addEventListener("click", () => {
    if (currentSelectedStep > 1) {
      currentSelectedStep--;
    }
  
    handleUpdateStep();
  });