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

    // ✅ 偵測幣別 (簡易版)
    const userLang = navigator.language || navigator.userLanguage;
    const currency = userLang.includes('zh-TW') ? 'TWD' : 'USD';
    const currencySymbol = currency === 'TWD' ? 'NT$' : '$';
    const exchangeRate = currency === 'TWD' ? 1 : 0.032; // 模擬 1 TWD = 0.032 USD

    // ✅ 模擬資料
    const data = [
      {
        name: "台灣",
        image: "https://oceanesim.com/product/%e5%8f%b0%e7%81%a3-2/",
        link: "https://oceanesim.com/product/%e5%8f%b0%e7%81%a3-2/",
        price: 299
      },
      {
        name: "日本",
        image: "https://oceanesim.com/product/%e5%8f%b0%e7%81%a3-2/",
        price: 399
      },
      {
        name: "韓國",
        image: "https://via.placeholder.com/100x100.png?text=Korea",
        price: 359
      }
    ];

    input.addEventListener("input", function () {
      const keyword = input.value.trim().toLowerCase();
      if (!keyword) {
        resultBox.innerHTML = '';
        resultBox.style.display = 'none';
        return;
      }
      const matched = data.filter(item => item.name.toLowerCase().includes(keyword));
      console.log("Matched:", matched);
      
      if (matched.length === 0) {
        resultBox.innerHTML = '<div class="result-item">❌ 找不到結果</div>';
        resultBox.style.display = 'block';
      } else {
        const displayResults = matched.map(item => {
          const displayPrice = Math.round(item.price * exchangeRate);
          return `
          <a class="result-item" href="${item.link}" target="_blank">
              <img src="${item.image}" alt="${item.name}">
              <div>
              <div class="info">
              <div class="name">${item.name}</div>
              </div>
            </div>
            </div>
          `;
        }).join('');
      
        resultBox.innerHTML = `
          <h4 class="dropdown-title">旅行目的地</h4>
          ${displayResults}
        `;
        resultBox.style.display = 'block'; // ✅ 要保證可見
      }
      

      resultBox.style.display = 'block';
    });

    // 點擊外部關閉下拉
    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) {
        resultBox.style.display = "none";
      }
    });
  });















