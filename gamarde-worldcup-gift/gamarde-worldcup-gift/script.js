// =========================================================
// ⚙️ إعدادات لازم تعدلها
// =========================================================
// حط هون رابط الـ Cloudflare Worker يلي رح تسويه (شوف README.md)
const WORKER_URL = "https://YOUR-WORKER-NAME.YOUR-SUBDOMAIN.workers.dev/order";

// =========================================================
// عناصر الصفحة
// =========================================================
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
const retryBtn      = document.getElementById("retryBtn");
const steps         = document.querySelectorAll(".step");

let hasClickedFollow = false;
let isUnlocked = false;

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

  orderSection.hidden = false;
  setTimeout(() => {
    orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
    tableInput.focus({ preventScroll: true });
  }, 350);
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
  const isValid = tableNumber && Number(tableNumber) >= 1 && Number(tableNumber) <= 200;

  fieldError.hidden = isValid;
  if (!isValid) {
    tableInput.focus();
    return;
  }

  errorState.hidden = true;
  submitBtn.disabled = true;
  submitBtn.classList.add("is-loading");

  try {
    const res = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tableNumber,
        source: "worldcup26-gamarde",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) throw new Error("bad response");

    orderForm.hidden = true;
    successState.hidden = false;
  } catch (err) {
    errorState.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("is-loading");
  }
});

retryBtn.addEventListener("click", () => {
  errorState.hidden = true;
  orderForm.requestSubmit();
});
