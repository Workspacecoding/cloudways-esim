document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".country-card");
  
    function updateDisplay() {
      const isMobile = window.innerWidth <= 990;
  
      cards.forEach((card, idx) => {
        if (isMobile && idx >= 4) {
          card.style.display = "none";
        } else {
          card.style.display = "flex";
        }
      });
    }
  
    // 初次執行
    updateDisplay();
  
    // 如果視窗變動，也重新套用一次
    window.addEventListener("resize", updateDisplay);
  });