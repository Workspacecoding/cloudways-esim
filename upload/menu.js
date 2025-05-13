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

  //search-bar js
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("countryInput");
    const resultBox = document.getElementById("result-box");
    const wrapper = document.getElementById("search-wrapper");
  
    // ✅ 載入時先清空 dropdown
    resultBox.innerHTML = '';
    resultBox.style.display = 'none';
  
    // ✅ 按 Enter 開始查詢
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const keyword = input.value.trim();
        if (!keyword) return;
  
        // 顯示 loading 訊息
        resultBox.innerHTML = '<p style="padding:10px;">🔍 查詢中...</p>';
        resultBox.style.display = 'block';
  
        fetch(window.location.href.split('?')[0] + '?country=' + encodeURIComponent(keyword))
          .then(res => res.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const output = doc.querySelector('#result-output');
            if (output) {
              resultBox.innerHTML = output.innerHTML;
              resultBox.style.display = 'block';
            } else {
              resultBox.innerHTML = '<p style="color:red; padding:10px;">❌ 找不到結果</p>';
            }
          });
      }
    });
  
    // ✅ 清空輸入時，自動關閉 dropdown
    input.addEventListener("input", function () {
      const keyword = input.value.trim();
      if (!keyword) {
        resultBox.innerHTML = '';
        resultBox.style.display = 'none';
      }
    });
  
    // ✅ 點擊外部自動關閉 dropdown
    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) {
        resultBox.innerHTML = '';
        resultBox.style.display = 'none';
      }
    });
  });
















