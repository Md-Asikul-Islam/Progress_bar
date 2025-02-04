function initializeProgressBar(progressSelector, prevBtnSelector, nextBtnSelector, stepSelector) {
    const progress = document.querySelector(progressSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    const steps = document.querySelectorAll(stepSelector);
    let currentStep = 1;
  
    function updateStep() {
      steps.forEach((step, index) => {
        step.classList.toggle("active", index < currentStep);
      });
  
      progress.style.width = `${((currentStep - 1) / (steps.length - 1)) * 100}%`;
      prevBtn.disabled = currentStep === 1;
      nextBtn.disabled = currentStep === steps.length;
    }
  
    function changeStep(direction) {
      currentStep = Math.min(Math.max(currentStep + direction, 1), steps.length);
      updateStep();
    }
  
    prevBtn.addEventListener("click", () => changeStep(-1));
    nextBtn.addEventListener("click", () => changeStep(1));
  
    updateStep(); // Initialize UI state
  }
  
  // Initialize the progress bar
  initializeProgressBar(".progress", ".prev-btn", ".next-btn", ".icon-wrapper");
  