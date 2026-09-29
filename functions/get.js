// /get — store redirect. Not a marketing page.
// iPhone, iPad, iPod -> App Store. Android -> Google Play. Else the static fallback.
// iPadOS that sends a desktop Macintosh user agent cannot be told apart here;
// get/index.html redirects those before paint (maxTouchPoints).

const APPLE = "https://apps.apple.com/us/app/receta-studio/id6775508328";
const PLAY = "https://play.google.com/store/apps/details?id=com.spinlightproductions.recetastudio";

function destination(userAgent) {
  const ua = userAgent || "";
  if (/iPhone|iPad|iPod/i.test(ua)) return APPLE;
  if (/Android/i.test(ua)) return PLAY;
  return null;
}

export function onRequest(context) {
  const dest = destination(context.request.headers.get("User-Agent"));
  if (!dest) return context.next();
  return new Response(null, {
    status: 302,
    headers: {
      Location: dest,
      "Cache-Control": "no-store",
    },
  });
}
