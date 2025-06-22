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
        link:"https://oceanesim.com/product/%e5%8f%b0%e7%81%a3-2/",
        price: 359
      },
        {
        name: "奧蘭群島",
        image: "https://via.placeholder.com/100x100.png?text=Aaland+Islands",
        link: "https://oceanesim.com/product/aaland-islands/",
        price: 359
      },
      {
        name: "阿爾巴尼亞",
        image: "https://via.placeholder.com/100x100.png?text=Albania",
        link: "https://oceanesim.com/product/albania/",
        price: 359
      },
      {
        name: "阿爾及利亞",
        image: "https://via.placeholder.com/100x100.png?text=Algeria",
        link: "https://oceanesim.com/product/algeria/",
        price: 359
      },
      {
        name: "阿根廷",
        image: "https://via.placeholder.com/100x100.png?text=Argentina",
        link: "https://oceanesim.com/product/argentina/",
        price: 359
      },
      {
        name: "亞美尼亞",
        image: "https://via.placeholder.com/100x100.png?text=Armenia",
        link: "https://oceanesim.com/product/armenia/",
        price: 359
      },
      {
        name: "澳大利亞",
        image: "https://via.placeholder.com/100x100.png?text=Australia",
        link: "https://oceanesim.com/product/australia/",
        price: 359
      },
      {
        name: "奧地利",
        image: "https://via.placeholder.com/100x100.png?text=Austria",
        link: "https://oceanesim.com/product/austria/",
        price: 359
      },
      {
        name: "阿塞拜疆",
        image: "https://via.placeholder.com/100x100.png?text=Azerbaijan",
        link: "https://oceanesim.com/product/azerbaijan/",
        price: 359
      },
      {
        name: "孟加拉國",
        image: "https://via.placeholder.com/100x100.png?text=Bangladesh",
        link: "https://oceanesim.com/product/bangladesh/",
        price: 359
      },
      {
        name: "白俄羅斯",
        image: "https://via.placeholder.com/100x100.png?text=Belarus",
        link: "https://oceanesim.com/product/belarus/",
        price: 359
      },
      {
        name: "比利時",
        image: "https://via.placeholder.com/100x100.png?text=Belgium",
        link: "https://oceanesim.com/product/belgium/",
        price: 359
      },
      {
        name: "玻利維亞",
        image: "https://via.placeholder.com/100x100.png?text=Bolivia",
        link: "https://oceanesim.com/product/bolivia/",
        price: 359
      },
      {
        name: "波黑（波士尼亞與赫塞哥維納）",
        image: "https://via.placeholder.com/100x100.png?text=Bosnia+And+Herzegovina",
        link: "https://oceanesim.com/product/bosnia-and-herzegovina/",
        price: 359
      },
      {
        name: "波札那",
        image: "https://via.placeholder.com/100x100.png?text=Botswana",
        link: "https://oceanesim.com/product/botswana/",
        price: 359
      },
      {
        name: "巴西",
        image: "https://via.placeholder.com/100x100.png?text=Brazil",
        link: "https://oceanesim.com/product/brazil/",
        price: 359
      },
      {
        name: "汶萊（文萊達魯薩蘭國）",
        image: "https://via.placeholder.com/100x100.png?text=Brunei+Darussalam",
        link: "https://oceanesim.com/product/brunei-darussalam/",
        price: 359
      },
      {
        name: "保加利亞",
        image: "https://via.placeholder.com/100x100.png?text=Bulgaria",
        link: "https://oceanesim.com/product/bulgaria/",
        price: 359
      },
      {
        name: "布吉納法索",
        image: "https://via.placeholder.com/100x100.png?text=Burkina+Faso",
        link: "https://oceanesim.com/product/burkina-faso/",
        price: 359
      },
      {
        name: "柬埔寨",
        image: "https://via.placeholder.com/100x100.png?text=Cambodia",
        link: "https://oceanesim.com/product/cambodia/",
        price: 359
      },
      {
        name: "喀麥隆",
        image: "https://via.placeholder.com/100x100.png?text=Cameroon",
        link: "https://oceanesim.com/product/cameroon/",
        price: 359
      },
      {
        name: "加拿大",
        image: "https://via.placeholder.com/100x100.png?text=Canada",
        link: "https://oceanesim.com/product/canada/",
        price: 359
      },
      {
        name: "中非共和國",
        image: "https://via.placeholder.com/100x100.png?text=Central+African+Republic",
        link: "https://oceanesim.com/product/central-african-republic/",
        price: 359
      },
      {
        name: "查德",
        image: "https://via.placeholder.com/100x100.png?text=Chad",
        link: "https://oceanesim.com/product/chad/",
        price: 359
      },
      {
        name: "智利",
        image: "https://via.placeholder.com/100x100.png?text=Chile",
        link: "https://oceanesim.com/product/chile/",
        price: 359
      },
      {
        name: "中國",
        image: "https://via.placeholder.com/100x100.png?text=China",
        link: "https://oceanesim.com/product/china/",
        price: 359
      },
      {
        name: "哥倫比亞",
        image: "https://via.placeholder.com/100x100.png?text=Colombia",
        link: "https://oceanesim.com/product/colombia/",
        price: 359
      },
      {
        name: "剛果",
        image: "https://via.placeholder.com/100x100.png?text=Congo",
        link: "https://oceanesim.com/product/congo/",
        price: 359
      },
      {
        name: "哥斯大黎加",
        image: "https://via.placeholder.com/100x100.png?text=Costa+Rica",
        link: "https://oceanesim.com/product/costa-rica/",
        price: 359
      },
      {
        name: "科特迪瓦",
        image: "https://via.placeholder.com/100x100.png?text=Cote+Divoire",
        link: "https://oceanesim.com/product/cote-divoire/",
        price: 359
      },
      {
        name: "克羅埃西亞",
        image: "https://via.placeholder.com/100x100.png?text=Croatia",
        link: "https://oceanesim.com/product/croatia/",
        price: 359
      },
      {
        name: "賽普勒斯",
        image: "https://via.placeholder.com/100x100.png?text=Cyprus",
        link: "https://oceanesim.com/product/cyprus/",
        price: 359
      },
      {
        name: "捷克共和國",
        image: "https://via.placeholder.com/100x100.png?text=Czech+Republic",
        link: "https://oceanesim.com/product/czech-republic/",
        price: 359
      },
      {
        name: "丹麥",
        image: "https://via.placeholder.com/100x100.png?text=Denmark",
        link: "https://oceanesim.com/product/denmark/",
        price: 359
      },
      {
        name: "多明尼加共和國",
        image: "https://via.placeholder.com/100x100.png?text=Dominican+Republic",
        link: "https://oceanesim.com/product/dominican-republic/",
        price: 359
      },
      {
        name: "厄瓜多爾",
        image: "https://via.placeholder.com/100x100.png?text=Ecuador",
        link: "https://oceanesim.com/product/ecuador/",
        price: 359
      },
      {
        name: "埃及",
        image: "https://via.placeholder.com/100x100.png?text=Egypt",
        link: "https://oceanesim.com/product/egypt/",
        price: 359
      },
      {
        name: "薩爾瓦多",
        image: "https://via.placeholder.com/100x100.png?text=El+Salvador",
        link: "https://oceanesim.com/product/el-salvador/",
        price: 359
      },
      {
        name: "愛沙尼亞",
        image: "https://via.placeholder.com/100x100.png?text=Estonia",
        link: "https://oceanesim.com/product/estonia/",
        price: 359
      },
      {
        name: "芬蘭",
        image: "https://via.placeholder.com/100x100.png?text=Finland",
        link: "https://oceanesim.com/product/finland/",
        price: 359
      },
      {
        name: "法國",
        image: "https://via.placeholder.com/100x100.png?text=France",
        link: "https://oceanesim.com/product/france/",
        price: 359
      },
      {
        name: "加彭",
        image: "https://via.placeholder.com/100x100.png?text=Gabon",
        link: "https://oceanesim.com/product/gabon/",
        price: 359
      },
      {
        name: "喬治亞（格魯吉亞）",
        image: "https://via.placeholder.com/100x100.png?text=Georgia",
        link: "https://oceanesim.com/product/georgia/",
        price: 359
      },
      {
        name: "德國",
        image: "https://via.placeholder.com/100x100.png?text=Germany",
        link: "https://oceanesim.com/product/germany/",
        price: 359
      },
      {
        name: "直布羅陀",
        image: "https://via.placeholder.com/100x100.png?text=Gibraltar",
        link: "https://oceanesim.com/product/gibraltar/",
        price: 359
      },
      {
        name: "希臘",
        image: "https://via.placeholder.com/100x100.png?text=Greece",
        link: "https://oceanesim.com/product/greece/",
        price: 359
      },
      {
        name: "瓜德羅普",
        image: "https://via.placeholder.com/100x100.png?text=Guadeloupe",
        link: "https://oceanesim.com/product/guadeloupe/",
        price: 359
      },
      {
        name: "危地馬拉",
        image: "https://via.placeholder.com/100x100.png?text=Guatemala",
        link: "https://oceanesim.com/product/guatemala/",
        price: 359
      },
      {
        name: "根西島",
        image: "https://via.placeholder.com/100x100.png?text=Guernsey",
        link: "https://oceanesim.com/product/guernsey/",
        price: 359
      },
      {
        name: "宏都拉斯",
        image: "https://via.placeholder.com/100x100.png?text=Honduras",
        link: "https://oceanesim.com/product/honduras/",
        price: 359
      },
      {
        name: "中國香港",
        image: "https://via.placeholder.com/100x100.png?text=Hong+Kong+China",
        link: "https://oceanesim.com/product/hong-kong-china/",
        price: 359
      },
      {
        name: "匈牙利",
        image: "https://via.placeholder.com/100x100.png?text=Hungary",
        link: "https://oceanesim.com/product/hungary/",
        price: 359
      },
      {
        name: "冰島",
        image: "https://via.placeholder.com/100x100.png?text=Iceland",
        link: "https://oceanesim.com/product/iceland/",
        price: 359
      },
      {
        name: "印度",
        image: "https://via.placeholder.com/100x100.png?text=India",
        link: "https://oceanesim.com/product/india/",
        price: 359
      },
      {
        name: "印度尼西亞",
        image: "https://via.placeholder.com/100x100.png?text=Indonesia",
        link: "https://oceanesim.com/product/indonesia/",
        price: 359
      },
      {
        name: "伊拉克",
        image: "https://via.placeholder.com/100x100.png?text=Iraq",
        link: "https://oceanesim.com/product/iraq/",
        price: 359
      },
      {
        name: "愛爾蘭",
        image: "https://via.placeholder.com/100x100.png?text=Ireland",
        link: "https://oceanesim.com/product/ireland/",
        price: 359
      },
      {
        name: "馬恩島",
        image: "https://via.placeholder.com/100x100.png?text=Isle+Of+Man",
        link: "https://oceanesim.com/product/isle-of-man/",
        price: 359
      },
      {
        name: "以色列",
        image: "https://via.placeholder.com/100x100.png?text=Israel",
        link: "https://oceanesim.com/product/israel/",
        price: 359
      },
      {
        name: "義大利",
        image: "https://via.placeholder.com/100x100.png?text=Italy",
        link: "https://oceanesim.com/product/italy/",
        price: 359
      },
      {
        name: "日本",
        image: "https://via.placeholder.com/100x100.png?text=Japan",
        link: "https://oceanesim.com/product/japan/",
        price: 359
      },
      {
        name: "澤西島",
        image: "https://via.placeholder.com/100x100.png?text=Jersey",
        link: "https://oceanesim.com/product/jersey/",
        price: 359
      },
      {
        name: "約旦",
        image: "https://via.placeholder.com/100x100.png?text=Jordan",
        link: "https://oceanesim.com/product/jordan/",
        price: 359
      },
      {
        name: "哈薩克斯坦",
        image: "https://via.placeholder.com/100x100.png?text=Kazakhstan",
        link: "https://oceanesim.com/product/kazakhstan/",
        price: 359
      },
      {
        name: "肯亞",
        image: "https://via.placeholder.com/100x100.png?text=Kenya",
        link: "https://oceanesim.com/product/kenya/",
        price: 359
      },
      {
        name: "科索沃",
        image: "https://via.placeholder.com/100x100.png?text=Kosovo",
        link: "https://oceanesim.com/product/kosovo/",
        price: 359
      },
      {
        name: "科威特",
        image: "https://via.placeholder.com/100x100.png?text=Kuwait",
        link: "https://oceanesim.com/product/kuwait/",
        price: 359
      },
      {
        name: "吉爾吉斯斯坦",
        image: "https://via.placeholder.com/100x100.png?text=Kyrgyzstan",
        link: "https://oceanesim.com/product/kyrgyzstan/",
        price: 359
      },
      {
        name: "拉脫維亞",
        image: "https://via.placeholder.com/100x100.png?text=Latvia",
        link: "https://oceanesim.com/product/latvia/",
        price: 359
      },
      {
        name: "賴比瑞亞",
        image: "https://via.placeholder.com/100x100.png?text=Liberia",
        link: "https://oceanesim.com/product/liberia/",
        price: 359
      },
      {
        name: "列支敦斯登",
        image: "https://via.placeholder.com/100x100.png?text=Liechtenstein",
        link: "https://oceanesim.com/product/liechtenstein/",
        price: 359
      },
      {
        name: "立陶宛",
        image: "https://via.placeholder.com/100x100.png?text=Lithuania",
        link: "https://oceanesim.com/product/lithuania/",
        price: 359
      },
      {
        name: "盧森堡",
        image: "https://via.placeholder.com/100x100.png?text=Luxembourg",
        link: "https://oceanesim.com/product/luxembourg/",
        price: 359
      },
      {
        name: "中國澳門",
        image: "https://via.placeholder.com/100x100.png?text=Macao+China",
        link: "https://oceanesim.com/product/macao-china/",
        price: 359
      },
      {
        name: "馬達加斯加",
        image: "https://via.placeholder.com/100x100.png?text=Madagascar",
        link: "https://oceanesim.com/product/madagascar/",
        price: 359
      },
      {
        name: "馬拉威",
        image: "https://via.placeholder.com/100x100.png?text=Malawi",
        link: "https://oceanesim.com/product/malawi/",
        price: 359
      },
      {
        name: "馬來西亞",
        image: "https://via.placeholder.com/100x100.png?text=Malaysia",
        link: "https://oceanesim.com/product/malaysia/",
        price: 359
      },
      {
        name: "馬利",
        image: "https://via.placeholder.com/100x100.png?text=Mali",
        link: "https://oceanesim.com/product/mali/",
        price: 359
      },
      {
        name: "馬耳他",
        image: "https://via.placeholder.com/100x100.png?text=Malta",
        link: "https://oceanesim.com/product/malta/",
        price: 359
      },
      {
        name: "墨西哥",
        image: "https://via.placeholder.com/100x100.png?text=Mexico",
        link: "https://oceanesim.com/product/mexico/",
        price: 359
      },
      {
        name: "摩爾多瓦",
        image: "https://via.placeholder.com/100x100.png?text=Moldova",
        link: "https://oceanesim.com/product/moldova/",
        price: 359
      },
      {
        name: "摩納哥",
        image: "https://via.placeholder.com/100x100.png?text=Monaco",
        link: "https://oceanesim.com/product/monaco/",
        price: 359
      },
      {
        name: "蒙古",
        image: "https://via.placeholder.com/100x100.png?text=Mongolia",
        link: "https://oceanesim.com/product/mongolia/",
        price: 359
      },
      {
        name: "蒙特內哥羅",
        image: "https://via.placeholder.com/100x100.png?text=Montenegro",
        link: "https://oceanesim.com/product/montenegro/",
        price: 359
      },
      {
        name: "摩洛哥",
        image: "https://via.placeholder.com/100x100.png?text=Morocco",
        link: "https://oceanesim.com/product/morocco/",
        price: 359
      },
      {
        name: "莫三比克",
        image: "https://via.placeholder.com/100x100.png?text=Mozambique",
        link: "https://oceanesim.com/product/mozambique/",
        price: 359
      },
      {
        name: "尼泊爾",
        image: "https://via.placeholder.com/100x100.png?text=Nepal",
        link: "https://oceanesim.com/product/nepal/",
        price: 359
      },
      {
        name: "荷蘭",
        image: "https://via.placeholder.com/100x100.png?text=Netherlands",
        link: "https://oceanesim.com/product/netherlands/",
        price: 359
      },
      {
        name: "紐西蘭",
        image: "https://via.placeholder.com/100x100.png?text=New+Zealand",
        link: "https://oceanesim.com/product/new-zealand/",
        price: 359
      },
      {
        name: "尼加拉瓜",
        image: "https://via.placeholder.com/100x100.png?text=Nicaragua",
        link: "https://oceanesim.com/product/nicaragua/",
        price: 359
      },
      {
        name: "尼日",
        image: "https://via.placeholder.com/100x100.png?text=Niger",
        link: "https://oceanesim.com/product/niger/",
        price: 359
      },
      {
        name: "奈及利亞",
        image: "https://via.placeholder.com/100x100.png?text=Nigeria",
        link: "https://oceanesim.com/product/nigeria/",
        price: 359
      },
      {
        name: "北馬其頓",
        image: "https://via.placeholder.com/100x100.png?text=North+Macedonia",
        link: "https://oceanesim.com/product/north-macedonia/",
        price: 359
      },
      {
        name: "挪威",
        image: "https://via.placeholder.com/100x100.png?text=Norway",
        link: "https://oceanesim.com/product/norway/",
        price: 359
      },
      {
        name: "阿曼",
        image: "https://via.placeholder.com/100x100.png?text=Oman",
        link: "https://oceanesim.com/product/oman/",
        price: 359
      },
      {
        name: "巴基斯坦",
        image: "https://via.placeholder.com/100x100.png?text=Pakistan",
        link: "https://oceanesim.com/product/pakistan/",
        price: 359
      },
      {
        name: "巴拿馬",
        image: "https://via.placeholder.com/100x100.png?text=Panama",
        link: "https://oceanesim.com/product/panama/",
        price: 359
      },
      {
        name: "巴拉圭",
        image: "https://via.placeholder.com/100x100.png?text=Paraguay",
        link: "https://oceanesim.com/product/paraguay/",
        price: 359
      },
      {
        name: "祕魯",
        image: "https://via.placeholder.com/100x100.png?text=Peru",
        link: "https://oceanesim.com/product/peru/",
        price: 359
      },
      {
        name: "菲律賓",
        image: "https://via.placeholder.com/100x100.png?text=Philippines",
        link: "https://oceanesim.com/product/philippines/",
        price: 359
      },
      {
        name: "波蘭",
        image: "https://via.placeholder.com/100x100.png?text=Poland",
        link: "https://oceanesim.com/product/poland/",
        price: 359
      },
      {
        name: "葡萄牙",
        image: "https://via.placeholder.com/100x100.png?text=Portugal",
        link: "https://oceanesim.com/product/portugal/",
        price: 359
      },
      {
        name: "波多黎各",
        image: "https://via.placeholder.com/100x100.png?text=Puerto+Rico",
        link: "https://oceanesim.com/product/puerto-rico/",
        price: 359
      },
      {
        name: "卡達",
        image: "https://via.placeholder.com/100x100.png?text=Qatar",
        link: "https://oceanesim.com/product/qatar/",
        price: 359
      },
      {
        name: "留尼旺",
        image: "https://via.placeholder.com/100x100.png?text=Reunion",
        link: "https://oceanesim.com/product/reunion/",
        price: 359
      },
      {
        name: "羅馬尼亞",
        image: "https://via.placeholder.com/100x100.png?text=Romania",
        link: "https://oceanesim.com/product/romania/",
        price: 359
      },
      {
        name: "俄羅斯",
        image: "https://via.placeholder.com/100x100.png?text=Russia",
        link: "https://oceanesim.com/product/russia/",
        price: 359
      },
      {
        name: "沙烏地阿拉伯",
        image: "https://via.placeholder.com/100x100.png?text=Saudi+Arabia",
        link: "https://oceanesim.com/product/saudi-arabia/",
        price: 359
      },
      {
        name: "塞內加爾",
        image: "https://via.placeholder.com/100x100.png?text=Senegal",
        link: "https://oceanesim.com/product/senegal/",
        price: 359
      },
      {
        name: "塞爾維亞",
        image: "https://via.placeholder.com/100x100.png?text=Serbia",
        link: "https://oceanesim.com/product/serbia/",
        price: 359
      },
      {
        name: "塞席爾",
        image: "https://via.placeholder.com/100x100.png?text=Seychelles",
        link: "https://oceanesim.com/product/seychelles/",
        price: 359
      },
      {
        name: "新加坡",
        image: "https://via.placeholder.com/100x100.png?text=Singapore",
        link: "https://oceanesim.com/product/singapore/",
        price: 359
      },
      {
        name: "斯洛伐克",
        image: "https://via.placeholder.com/100x100.png?text=Slovakia",
        link: "https://oceanesim.com/product/slovakia/",
        price: 359
      },
      {
        name: "斯洛維尼亞",
        image: "https://via.placeholder.com/100x100.png?text=Slovenia",
        link: "https://oceanesim.com/product/slovenia/",
        price: 359
      },
      {
        name: "南非",
        image: "https://via.placeholder.com/100x100.png?text=South+Africa",
        link: "https://oceanesim.com/product/south-africa/",
        price: 359
      },
      {
        name: "韓國",
        image: "https://via.placeholder.com/100x100.png?text=South+Korea",
        link: "https://oceanesim.com/product/south-korea/",
        price: 359
      },
      {
        name: "西班牙",
        image: "https://via.placeholder.com/100x100.png?text=Spain",
        link: "https://oceanesim.com/product/spain/",
        price: 359
      },
      {
        name: "斯里蘭卡",
        image: "https://via.placeholder.com/100x100.png?text=Sri+Lanka",
        link: "https://oceanesim.com/product/sri-lanka/",
        price: 359
      },
      {
        name: "蘇丹",
        image: "https://via.placeholder.com/100x100.png?text=Sudan",
        link: "https://oceanesim.com/product/sudan/",
        price: 359
      },
      {
        name: "瑞典",
        image: "https://via.placeholder.com/100x100.png?text=Swaziland",
        link: "https://oceanesim.com/product/sweden/",
        price: 359
      },
      {
        name: "瑞士",
        image: "https://via.placeholder.com/100x100.png?text=Sweden",
        link: "https://oceanesim.com/product/switzerland/",
        price: 359
      },
      {
        name: "坦尚尼亞",
        image: "https://via.placeholder.com/100x100.png?text=Switzerland",
        link: "https://oceanesim.com/product/tanzania/",
        price: 359
      },
      {
        name: "泰國",
        image: "https://via.placeholder.com/100x100.png?text=Tanzania",
        link: "https://oceanesim.com/product/thailand/",
        price: 359
      },
      {
        name: "突尼西亞",
        image: "https://via.placeholder.com/100x100.png?text=Thailand",
        link: "https://oceanesim.com/product/tunisia/",
        price: 359
      },
      {
        name: "土耳其",
        image: "https://via.placeholder.com/100x100.png?text=Tunisia",
        link: "https://oceanesim.com/product/turkey/",
        price: 359
      },
      {
        name: "烏干達",
        image: "https://via.placeholder.com/100x100.png?text=Turkey",
        link: "https://oceanesim.com/product/uganda/",
        price: 359
      },
      {
        name: "烏克蘭",
        image: "https://via.placeholder.com/100x100.png?text=Uganda",
        link: "https://oceanesim.com/product/ukraine/",
        price: 359
      },
      {
        name: "阿拉伯聯合大公國（阿聯酋）",
        image: "https://via.placeholder.com/100x100.png?text=Ukraine",
        link: "https://oceanesim.com/product/united-arab-emirates/",
        price: 359
      },
      {
        name: "英國",
        image: "https://via.placeholder.com/100x100.png?text=United+Arab+Emirates",
        link: "https://oceanesim.com/product/united-kingdom/",
        price: 359
      },
      {
        name: "美國",
        image: "https://via.placeholder.com/100x100.png?text=United+Kingdom",
        link: "https://oceanesim.com/product/united-states/",
        price: 359
      },
      {
        name: "烏拉圭",
        image: "https://via.placeholder.com/100x100.png?text=United+States",
        link: "https://oceanesim.com/product/uruguay/",
        price: 359
      },
      {
        name: "烏茲別克斯坦",
        image: "https://via.placeholder.com/100x100.png?text=Uruguay",
        link: "https://oceanesim.com/product/uzbekistan/",
        price: 359
      },
      {
        name: "越南",
        image: "https://via.placeholder.com/100x100.png?text=Uzbekistan",
        link: "https://oceanesim.com/product/vietnam/",
        price: 359
      },
      {
        name: "尚比亞",
        image: "https://via.placeholder.com/100x100.png?text=Vietnam",
        link: "https://oceanesim.com/product/zambia/",
        price: 359
      },
      
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

  















