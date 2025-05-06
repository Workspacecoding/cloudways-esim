document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("testBtn");
    const result = document.getElementById("testResult");

    btn.addEventListener("click", function () {
      result.innerText = "✅ JS 運作成功！";
      console.log("測試 JS 成功 ✅");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const mobileMenu = document.getElementById("mobileMenu");
  
    console.log("✅ JS Loaded"); // 測試 JS 有無正確載入
  
    if (!menuToggle || !menuClose || !mobileMenu) {
      console.warn("❗ 找不到 menu 元件，請確認 HTML 的 ID 是否正確");
      return;
    }
  
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.add("active");
      console.log("📱 選單開啟");
    });
  
    menuClose.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      console.log("📱 選單關閉");
    });
    document.addEventListener('DOMContentLoaded', function () {
      const btn = document.getElementById('testButton');
      const result = document.getElementById('testResult');
    
      if (btn && result) {
        btn.addEventListener('click', function () {
          result.textContent = '✅ JS 已成功載入並運作';
        });
      }
    });
    
  });

















