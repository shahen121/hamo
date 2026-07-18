/**
 * Cloudflare Worker — يستلم رقم الطاولة من الموقع ويرسله فوراً كإشعار تيليجرام.
 *
 * Secrets المطلوبة (تنضاف من لوحة Cloudflare، مو بالكود):
 *   TELEGRAM_BOT_TOKEN  → التوكن يلي تعطيك ياه BotFather
 *   TELEGRAM_CHAT_ID    → رقم الشات/القروب يلي رح يوصله الإشعار
 *
 * Variable اختياري:
 *   ALLOWED_ORIGIN → رابط موقعك على GitHub Pages (مثال: https://username.github.io)
 *                    إذا ما حطيته رح يقبل من أي مصدر (*), وهو تمام للتجربة.
 */

export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN || "*";

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // طلبات preflight من المتصفح
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "invalid_json" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const tableNumber = String(body.tableNumber || "").trim();
    const skinLabel = String(body.skinLabel || "").trim();
    const currentLang = String(body.currentLang || "").trim();
    const isValid = /^\d+$/.test(tableNumber) && Number(tableNumber) >= 1 && tableNumber.length <= 10;

    if (!isValid) {
      return new Response(JSON.stringify({ error: "invalid_table_number" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const time = new Date().toLocaleString("ar-IQ", { timeZone: "Asia/Baghdad" });

    const text =
      `🎁 طلب هدية جامارد جديد!\n\n` +
      `🪑 رقم الطاولة: ${tableNumber}\n` +
      (skinLabel ? `🧴 نوع البشرة: ${skinLabel}\n` : '') +
      (currentLang ? `🌐 اللغة المفضلة: ${currentLang.toUpperCase()}\n` : '') +
      `🕒 الوقت: ${time}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    if (!tgRes.ok) {
      return new Response(JSON.stringify({ error: "telegram_failed" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  },
};
