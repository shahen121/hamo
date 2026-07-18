// =========================================================
// إعدادات بوت تيليجرام للربط المباشر
// تحذير: هذه الطريقة غير آمنة تماماً للمشاريع الحقيقية ولكنها ستعمل مباشرة بدون Cloudflare
const BOT_TOKEN = "8758784997:AAGrHJ_WZJqen1VlgqmqEQp245CtmotT73Y";
const CHAT_ID = "@soya_tim";

// =========================================================
// الترجمات
// =========================================================
const translations = {
  ar: {
    heroEyebrow: "هدية ليلة النهائي",
    heroTitle: "هدية من جامارد<br>بمناسبة نهائي كأس العالم",
    heroSub: "تابعنا على إنستقرام وافتح صندوق هديتك الطبيعية من جامارد — مقدمة لكم الليلة من <span class=\"restaurant-name-slot\">Gamarde IQ</span>",
    step1: "شاهد الهدية",
    step2: "تابعنا بانستقرام",
    step3: "اكتب رقم طاولتك",
    selectionTitle: "اختر نوع بشرتك <span style='color:#ff4d4f'>*</span>",
    skinOily: "بشرة دهنية",
    skinDry: "بشرة جافة",
    skinNormal: "بشرة عادية",
    errorSkin: "يرجى اختيار نوع البشرة أولاً",
    lockText: "هديتك بانتظارك، مقفلة الآن",
    igBtnText: "تابعنا على انستقرام",
    manualBtn: "رجعت توي؟ افتح الهدية يدوياً",
    orderTitle: "هديتك انفتحت 🎉",
    orderSub: "اكتب رقم طاولتك وضغطة وحدة، وفريق <span class=\"restaurant-name-slot\">Gamarde IQ</span> رح يوصلها إلك",
    labelTable: "رقم الطاولة",
    errorTable: "فضلاً اكتب رقم طاولة صحيح",
    submitBtn: "إرسال الطلب",
    successMsg: "تم استلام طلبك! هديتك جاية على طاولتك.",
    errorMsg: "حدث خلل أثناء إرسال الطلب. يرجى مناداة النادل مباشرة.",
    retryBtn: "",
    footerText: "مقدمة من <span class=\"restaurant-name-slot\">Gamarde IQ</span> © 2026",
    placeholderTable: "12",
    alreadyOrderedMsg: "لقد قمت بطلب هديتك مسبقاً! نراكم في مناسبات قادمة.",
    dir: "rtl"
  },
  ku: {
    heroEyebrow: "دیاری شەوی کۆتایی",
    heroTitle: "دیارییەک لە گاماردەوە<br>بە بۆنەی یاری کۆتایی جامی جیهانی",
    heroSub: "لە ئینستاگرام فۆڵۆومان بکە و سندووقی دیارییە سروشتییەکەت لە گاماردەوە بکەرەوە — ئەم شەوە لەلایەن <span class=\"restaurant-name-slot\">Gamarde IQ</span> پێشکەشت دەکرێت",
    step1: "دیارییەکە ببینە",
    step2: "فۆڵۆومان بکە لە ئینستاگرام",
    step3: "ژمارەی مێزەکەت بنووسە",
    selectionTitle: "جۆری پێستت هەڵبژێرە <span style='color:#ff4d4f'>*</span>",
    skinOily: "پێستی چەور",
    skinDry: "پێستی وشک",
    skinNormal: "پێستی ئاسایی",
    errorSkin: "تکایە سەرەتا جۆری پێست هەڵبژێرە",
    lockText: "دیارییەکەت چاوەڕێتە، ئێستا داخراوە",
    igBtnText: "فۆڵۆومان بکە لە ئینستاگرام",
    manualBtn: "تازە گەڕایتەوە؟ بە دەست دیارییەکە بکەرەوە",
    orderTitle: "دیارییەکەت کرایەوە 🎉",
    orderSub: "ژمارەی مێزەکەت بنووسە بە یەک کلیک، تیمی <span class=\"restaurant-name-slot\">Gamarde IQ</span> بۆت دەگەیەنێت",
    labelTable: "ژمارەی مێز",
    errorTable: "تکایە ژمارەیەکی دروستی مێز بنووسە",
    submitBtn: "ناردنی داواکاری",
    successMsg: "داواکارییەکەت وەرگیرا! دیارییەکەت بەرەو مێزەکەت دێت.",
    errorMsg: "کێشەیەک لە ناردنی داواکارییەکەدا ڕوویدا. تکایە ڕاستەوخۆ بانگی گارسۆن بکە.",
    retryBtn: "",
    footerText: "پێشکەشکراوە لەلایەن <span class=\"restaurant-name-slot\">Gamarde IQ</span> © 2026",
    placeholderTable: "12",
    alreadyOrderedMsg: "تۆ پێشتر دیارییەکەت داواکردووە! لە بۆنەکانی داهاتوودا دەتبینینەوە.",
    dir: "rtl"
  },
  en: {
    heroEyebrow: "Final Night Gift",
    heroTitle: "A Gift from Gamarde<br>For the World Cup Final",
    heroSub: "Follow us on Instagram and unlock your natural gift from Gamarde — brought to you tonight by <span class=\"restaurant-name-slot\">Gamarde IQ</span>",
    step1: "View the Gift",
    step2: "Follow us on IG",
    step3: "Enter Table Number",
    selectionTitle: "Choose your skin type <span style='color:#ff4d4f'>*</span>",
    skinOily: "Oily Skin",
    skinDry: "Dry Skin",
    skinNormal: "Normal Skin",
    errorSkin: "Please select your skin type first",
    lockText: "Your gift is waiting, currently locked",
    igBtnText: "Follow us on Instagram",
    manualBtn: "Just returned? Unlock manually",
    orderTitle: "Gift Unlocked 🎉",
    orderSub: "Enter your table number and with one click, the <span class=\"restaurant-name-slot\">Gamarde IQ</span> team will deliver it to you.",
    labelTable: "Table Number",
    errorTable: "Please enter a valid table number",
    submitBtn: "Submit Order",
    successMsg: "Your order is received! Your gift is on its way.",
    errorMsg: "There was an error submitting your order. Please call the waiter directly.",
    retryBtn: "",
    footerText: "Presented by <span class=\"restaurant-name-slot\">Gamarde IQ</span> © 2026",
    placeholderTable: "12",
    alreadyOrderedMsg: "You have already requested your gift! See you in future events.",
    dir: "ltr"
  }
};

let currentLang = 'ar'; // Default

// =========================================================
// عناصر الصفحة
// =========================================================
const langSelector  = document.getElementById("langSelector");
const appContainer  = document.getElementById("app");
const langBtns      = document.querySelectorAll(".lang-btn");

const igFollowBtn   = document.getElementById("igFollowBtn");
const manualUnlock  = document.getElementById("manualUnlock");
const giftSection   = document.getElementById("giftSection");
const orderSection  = document.getElementById("orderSection");
const waterOverlay  = document.getElementById("waterOverlay");
const orderForm     = document.getElementById("orderForm");
const tableInput    = document.getElementById("tableNumber");
const fieldError    = document.getElementById("fieldError");
const submitBtn     = document.getElementById("submitBtn");
const successState  = document.getElementById("successState");
const errorState    = document.getElementById("errorState");
const alreadyOrderedState = document.getElementById("alreadyOrderedState");
const steps         = document.querySelectorAll(".step");
const skinCards     = document.querySelectorAll(".skin-type-card");

let hasClickedFollow = false;
let isUnlocked = false;
let selectedSkinType = null;

// =========================================================
// اختيار نوع البشرة
// =========================================================
skinCards.forEach(card => {
  card.addEventListener("click", () => {
    if (!isUnlocked) return;
    if (localStorage.getItem("gamarde_gift_ordered")) return;

    skinCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedSkinType = card.getAttribute("data-type");
    fieldError.hidden = true;

    if (orderSection.hidden) {
      orderSection.hidden = false;
      setTimeout(() => {
        orderSection.scrollIntoView({ behavior: "smooth", block: "center" });
        tableInput.focus({ preventScroll: true });
      }, 100);
    }
  });
});

// =========================================================
// اختيار اللغة
// =========================================================
langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.getAttribute("data-lang");
    setLanguage(currentLang);
    
    // Hide selector, show app with animation
    langSelector.style.opacity = '0';
    setTimeout(() => {
      langSelector.style.display = 'none';
      appContainer.style.display = 'block';
      requestAnimationFrame(() => {
        appContainer.classList.add("fade-in-app");
      });
    }, 400);
  });
});

function setLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
  
  tableInput.placeholder = dict.placeholderTable;
}

// =========================================================
// خطوة 1 → 2: لما يضغط "تابعنا على انستقرام"
// =========================================================
igFollowBtn.addEventListener("click", () => {
  hasClickedFollow = true;
  setActiveStep(2);
});

// =========================================================
// كشف الرجوع من انستقرام (تبديل التاب / التطبيق)
// =========================================================
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && hasClickedFollow && !isUnlocked) {
    unlockGift();
  }
});

window.addEventListener("focus", () => {
  if (hasClickedFollow && !isUnlocked) {
    unlockGift();
  }
});

// فتح يدوي احتياطي (لبعض المتصفحات يلي ما بتدعم كشف الرجوع تلقائياً)
manualUnlock.addEventListener("click", () => {
  hasClickedFollow = true;
  unlockGift();
});

// =========================================================
// فتح الهدية + تأثير الموجة المائية
// =========================================================
function unlockGift() {
  if (isUnlocked) return;
  isUnlocked = true;

  giftSection.classList.add("is-unlocked");
  setActiveStep(3);

  waterOverlay.classList.add("rippling");
  setTimeout(() => waterOverlay.classList.remove("rippling"), 1500);

  if (localStorage.getItem("gamarde_gift_ordered")) {
    orderSection.hidden = false;
    orderForm.hidden = true;
    alreadyOrderedState.hidden = false;
    setTimeout(() => orderSection.scrollIntoView({ behavior: "smooth", block: "start" }), 350);
  }
}

function setActiveStep(n) {
  steps.forEach((el) => {
    el.classList.toggle("is-active", Number(el.dataset.step) <= n);
  });
}

// =========================================================
// إرسال الطلب (رقم الطاولة) إلى الـ Worker
// =========================================================
orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const tableNumber = tableInput.value.trim();
  const isValidTable = /^\d+$/.test(tableNumber) && Number(tableNumber) >= 1;

  if (!selectedSkinType || !isValidTable) {
    if (!selectedSkinType) {
      fieldError.innerHTML = translations[currentLang].errorSkin;
    } else {
      fieldError.innerHTML = translations[currentLang].errorTable;
      tableInput.focus();
    }
    fieldError.hidden = false;
    return;
  }

  errorState.hidden = true;
  submitBtn.disabled = true;
  submitBtn.classList.add("is-loading");

  try {
    const skinLabel = translations[currentLang]['skin' + selectedSkinType.charAt(0).toUpperCase() + selectedSkinType.slice(1)];
    
    const textMessage = `🎁 طلب هدية جامارد جديد!\n\n🪑 رقم الطاولة: ${tableNumber}\n🧴 نوع البشرة: ${skinLabel}\n🌐 اللغة المفضلة: ${currentLang.toUpperCase()}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: textMessage,
      }),
    });

    if (!res.ok) throw new Error("bad response");

    localStorage.setItem("gamarde_gift_ordered", "true");

    orderForm.hidden = true;
    successState.hidden = false;
  } catch (err) {
    errorState.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("is-loading");
  }
});
